import React from 'react'
import Event from './Event'

function EventList({events}) {
  return (
    <div className='grid grid-cols-5 gap-4'>
        {events.map(event => (
            <Event key={event.id} event={event} />
        ))}
    </div>
  )
}

export default EventList