import React from 'react'
import Card from './Card'
import "../Styles/column.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchDataforUser } from '../utils/utility'
export default function User({ OrderingOption, GroupingOption }) {
  const [loading, setLoading] = useState(true);
  const [usersWithTickets, setUsersWithTickets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataforUser(OrderingOption);
        setUsersWithTickets(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [OrderingOption])

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className='column_section'>
        {
          usersWithTickets.map((user) => {
            return (
              <div className='column_main'>
                <div className='column_header'>
                  <div className='column_type'>
                    <svg style={{ fill: "#94a1b2" }} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                    {user.name} {user.tickets.length}</div>
                  <div className='coulumn_header_option'>
                    <div>+</div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                    </div>
                  </div>
                </div>
                <div className='column_card'>
                  {
                    user.tickets.map((item) => {
                      return (
                        <Card key={item.id} GroupingOption={GroupingOption} item={item} />
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
