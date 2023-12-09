import React from 'react'
import Card from './Card'
import "../Styles/column.css"
import { useState,useEffect } from 'react'
import axios from 'axios'
export default function Column({selectedOrderingOption}) {
    const [loading, setLoading] = useState(true);
    const [boardData, setBoardData] = useState({
        backlog: [],
        todo: [],
        inprogress: [],
        done: [],
        cancel: [],
      });
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
            const initialData = response.data.tickets;
            const newData = {
                backlog: [],
                todo: [],
                inprogress: [],
                done: [],
                cancel: [],
            };
            if (selectedOrderingOption === 'title') {
               
                    initialData.sort((a, b) => a.title.localeCompare(b.title));
               
              } else if (selectedOrderingOption === 'priority') {
                
                    initialData.sort((a, b) => b.priority - a.priority);
               
            }
        
            initialData.forEach((item) => {
                switch (item.status.toLowerCase()) {
                  case 'backlog':
                    newData.backlog.push(item);
                    break;
                  case 'todo':
                    newData.todo.push(item);
                    break;
                  case 'in progress':
                    newData.inprogress.push(item);
                    break;
                  case 'done':
                    newData.done.push(item);
                    break;
                  case 'cancel':
                    newData.cancel.push(item);
                    break;
                  default:
                    break;
                }
              });

              setBoardData(newData);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    },[selectedOrderingOption])
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className='column_section'>

                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>Backlog {boardData.backlog.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                        {
                           boardData.backlog.map((item) => {
                               return(
                                    <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>Todo {boardData.todo.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                    {
                           boardData.todo.map((item) => {
                               return(
                                     <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>In Progress {boardData.inprogress.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                    {
                           boardData.inprogress.map((item) => {
                               return(
                                    <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>Done {boardData.done.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                        {
                           boardData.done.map((item) => {
                               return(
                                    <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>Cancel {boardData.cancel.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                    {
                           boardData.cancel.map((item) => {
                               return(
                                    <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
