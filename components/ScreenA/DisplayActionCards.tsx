import React from 'react'
import ActionCard from './ActionCard'

export default function DisplayActionCards() {
  return (
    <div className='flex flex-col gap-2'>
        {['create', 'sold', 'bought','create', 'sold', 'bought', 'create', 'sold'].map((el) => (
            <ActionCard title={el}/>
        ))}
    </div>
  )
}
