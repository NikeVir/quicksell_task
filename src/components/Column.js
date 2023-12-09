import React from 'react'
import Card from './Card'
import { column_type } from '../utils/svgData'

export default function Column({data,type,GroupingOption}) {
    return (
        <div className='column_main'>
            <div className='column_header'>
                <div className='column_type'>
                    {column_type[type].svg}
                    {column_type[type].name}
                    <span style={{marginLeft:"10px"}}>{data.length}</span>
                    </div>
                <div className='coulumn_header_option'>
                    <div>+</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                    </div>
                </div>
            </div>
            <div className='column_card'>
                {
                    data.map((item) => {
                        return (
                            <Card key={item.id} GroupingOption={GroupingOption} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
