import React from 'react'

function Event({event}) {
  return (
    <div className="border-b border-l border-r border-black flex flex-col rounded-lg hover:shadow-xl cursor-pointer">
      <div>
        <img className="w-full h-64 rounded-t-lg" src={event.poster} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between my-auto">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">{event.title}</h1>
          <p className="text-sm text-gray-600">{event.description}</p>
          <div className='mt-2'>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-black">Starts At</span>
              <br />
              {new Date(event.start).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-black">Ends At</span>
              <br />
              {new Date(event.end).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-600">Entry Fee</p>
          <p className="text-xl text-blue-600 font-semibold">
            ₹{event.entryFee}
          </p>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mx-4 my-2">
        View details
      </button>
    </div>
  );
}

export default Event