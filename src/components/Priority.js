import React from 'react'
import "../Styles/column.css"
import { useState,useEffect } from 'react'
import axios from 'axios'
import Column from './Column'
import { fetchDataforPriority } from '../utils/utility'
export default function Priority({GroupingOption}) {
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
              const data = await fetchDataforPriority();
              setBoardData(data);
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
                <Column data={boardData.nopriority} GroupingOption={GroupingOption} type='nopriority'  />
                <Column data={boardData.urgent} GroupingOption={GroupingOption} type='urgent' />
                <Column data={boardData.high} GroupingOption={GroupingOption} type='high' />
                <Column data={boardData.medium} GroupingOption={GroupingOption} type='medium' />
                <Column data={boardData.low} GroupingOption={GroupingOption} type='low' />
            </div>
        </div>
    )
}
