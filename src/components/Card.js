import React from 'react'
import "../Styles/card.css"
export default function Card({item}) {
  return (
    <div className='card_main'>
      <div className='card_elements'>
        <div className='card_title'>
            <div>{item.id}</div>
            <div>pic</div>    
        </div>
        <p className='card_task'>{item.title}</p>
        <div className='card_action'>
            <div>...</div>
            <div>Feature Request</div>
        </div>
      </div>
    </div>
  )
}
