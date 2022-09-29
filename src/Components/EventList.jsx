import React from 'react'
import Event from './Event'
import { useQuery, gql } from "@apollo/client";

const Events = gql`
  query getAllEvents {
    id
    name
    description
    startDate
    endDate
    location
    entryFee
    image
  }
`;

function EventList({events}) {

  const { data, loading, error } = useQuery(Events);
  console.log(data);

  return (
    <div className='grid grid-cols-5 gap-4'>
        {events.map(event => (
            <Event key={event.id} event={event} />
        ))}
    </div>
  )
}

export default EventList