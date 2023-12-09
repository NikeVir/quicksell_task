import React from 'react'
import "../Styles/card.css"
import { statusColor } from '../utils/svgData'

export default function Card({item,GroupingOption}) {
  const TruncateString = ({ text, maxLength }) => {
    if (text.length <= maxLength) {
      return <p>{text}</p>;
    }
    const truncatedText = `${text.slice(0, maxLength)}...`;
    return <p title={text}>{truncatedText}</p>;
  };
  return (
    <div className='card_main'>
      <div className='card_elements'>
        <div className='card_title'>
            <div>{item.id}</div>
            {
              GroupingOption != 'user' ? <div><svg fill="#94a1b2" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg></div>   : null
            }
              
        </div>
        <p className='card_task'>
          {
            GroupingOption != 'status'? statusColor[item.status].svg : null
          }
          <TruncateString text={item.title} maxLength={70} /></p>
        <div className='card_action'>
            <div>...</div>
            <div>{item.tag}</div>
        </div>
      </div>
    </div>
  )
}
