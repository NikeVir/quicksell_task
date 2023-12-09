import React from 'react'
import Card from './Card'
import "../Styles/column.css"
import { useState,useEffect } from 'react'
import fetchData, { fetchDataforStatus } from '../utils/utility'
import Column from './Column'
export default function Status({OrderingOption, GroupingOption}) {
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
            console.log(OrderingOption);
            const data = await fetchDataforStatus(OrderingOption);
              setBoardData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    },[OrderingOption])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='column_section'>
                <Column data={boardData.backlog} GroupingOption={GroupingOption} type='backlog' />
                <Column data={boardData.todo} GroupingOption={GroupingOption} type='todo' />
                <Column data={boardData.inprogress} GroupingOption={GroupingOption}  type='inprogress' />
                <Column data={boardData.done} GroupingOption={GroupingOption} type='done' />
                <Column data={boardData.cancel} GroupingOption={GroupingOption} type='cancel' />
            </div>
        </div>
    )
}


