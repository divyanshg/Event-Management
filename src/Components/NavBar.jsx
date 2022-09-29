import React from 'react'

function NavBar() {
  return (
    <div className="w-full absolute top-0 left-0 shadow">
      <div className="w-full h-16 flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">Festo</h1>
        <div className='bg-gray-200 rounded-full p-1 px-3 hover:bg-gray-300 cursor-pointer'>
            <p>Divyansh</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar