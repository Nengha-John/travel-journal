import React from 'react'
import data from '../data'
import Card from './card'


export default function CardsColumn() {
    const itemElements = data.map((item)=> <Card item={item} />)
    return (
        <div>
            {itemElements}
        </div>

    )
}