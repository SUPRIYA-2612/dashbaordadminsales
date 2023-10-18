import React from 'react'
import { FaSearch } from 'react-icons/fa';


export default function Header() {
  return (
    <div className="bg-nuetral-100 h-16 px-4 flex items-center border-b border-gray-200 justify-between">
    
    <div className="flex items-center">
        <div className="ml-4 text-black font-bold">
          Hello Shahrukh
          <span role="img" aria-label="Bye" className="ml-1">
            👋
          </span>
        </div>
      </div>
      <div className="mb-2 flex flex-col lg:flex-row justify-between items-center">
  <div className="relative w-full"> {/* Add a relative div for the input */}
    <input
      type="text"ss
      placeholder="Search"
      className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
      <FaSearch className="text-gray-400" /> {/* Insert the search icon */}
    </div>
  </div>
</div>
  </div>
    
   
  )
}
