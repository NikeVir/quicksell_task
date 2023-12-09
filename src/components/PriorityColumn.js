import React from 'react'
import Card from './Card'
import "../Styles/column.css"
import { useState,useEffect } from 'react'
import axios from 'axios'
export default function PriorityColumn({selectedOrderingOption}) {
    const [loading, setLoading] = useState(true);
    const [boardData, setBoardData] = useState({
        urgent: [],
        high: [],
        medium: [],
        low: [],
        nopriority: [],
      });
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
            const initialData = response.data.tickets;
            const newData = {
                urgent: [],
                high: [],
                medium: [],
                low: [],
                nopriority: [],
              };
        
            initialData.forEach((item) => {
                switch (item.priority) {
                  case 4:
                    newData.urgent.push(item);
                    break;
                  case 3:
                    newData.high.push(item);
                    break;
                  case 2:
                    newData.medium.push(item);
                    break;
                  case 1:
                    newData.low.push(item);
                    break;
                  case 0:
                    newData.nopriority.push(item);
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
    },[])
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className='column_section'>

                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>Urgent {boardData.urgent.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                        {
                           boardData.urgent.map((item) => {
                               return(
                                    <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>High {boardData.high.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                    {
                           boardData.high.map((item) => {
                               return(
                                     <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>Medium {boardData.medium.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                    {
                           boardData.medium.map((item) => {
                               return(
                                    <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>Low {boardData.low.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                        {
                           boardData.low.map((item) => {
                               return(
                                    <Card key={item.id} item={item} />
                               )
                           })
                        }
                    </div>
                </div>


                <div className='column_main'>
                    <div className='column_header'>
                        <div className='column_type'>No Priority {boardData.nopriority.length}</div>
                        <div className='coulumn_header_option'>
                            <div>+</div>
                            <div>...</div>
                        </div>
                    </div>
                    <div className='column_card'>
                    {
                           boardData.nopriority.map((item) => {
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
