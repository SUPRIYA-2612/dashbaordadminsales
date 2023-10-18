import React, { useState } from 'react';

const Profile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-white bg-slate-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200 mr-2">
            <img
              src="https://source.unsplash.com/80x80?face" 
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Evano</p>
            <p className="text-sm">Project Manager</p>
          </div>
        </div>
        <div className="transform rotate-0 transition-transform duration-150" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isDropdownOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 7.293a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mb-10 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 sm:hidden md:block">

            <a
              href="#logout"
              className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Logout
            </a>
        
        </div>
      )}
    </div>
  );
};

export default Profile;
