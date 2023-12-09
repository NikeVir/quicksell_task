import React from 'react'
import Card from './Card'
import "../Styles/column.css"
import { useState,useEffect } from 'react'
import axios from 'axios'
export default function UserColumn({selectedOrderingOption}) {
    const [loading, setLoading] = useState(true);
    const [usersWithTickets, setUsersWithTickets] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
            const initialDataUsers = response.data.users;
            const initialDataTickets = response.data.tickets;
            const usersMap = initialDataUsers.reduce((map, user) => {
                map[user.id] = { ...user, tickets: [] };
                return map;
              }, {});
        
              initialDataTickets.forEach((ticket) => {
                const userId = ticket.userId;
                if (usersMap[userId]) {
                  usersMap[userId].tickets.push(ticket);
                }
              });
        
              const updatedUsersWithTickets = Object.values(usersMap);
              if (selectedOrderingOption === 'title') {
                updatedUsersWithTickets.forEach((user) => {
                  user.tickets.sort((a, b) => a.title.localeCompare(b.title));
                });
              } else if (selectedOrderingOption === 'priority') {
                updatedUsersWithTickets.forEach((user) => {
                  user.tickets.sort((a, b) => b.priority - a.priority);
                });
              }
              setUsersWithTickets(updatedUsersWithTickets);
              
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    },[selectedOrderingOption])

    const handleSortBy = (option) => {
        setSortBy(option);
      };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className='column_section'>
                {
                    usersWithTickets.map((user) => {
                        return(
                            <div className='column_main'>
                                <div className='column_header'>
                                    <div className='column_type'>{user.name} {user.tickets.length}</div>
                                    <div className='coulumn_header_option'>
                                        <div>+</div>
                                        <div>...</div>
                                    </div>
                                </div>
                                <div className='column_card'>
                                    {
                                        user.tickets.map((item) => {
                                            return(
                                                <Card key={item.id} item={item} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>

        </div>
    )
}
