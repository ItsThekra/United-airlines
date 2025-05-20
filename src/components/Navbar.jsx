import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-blue-600 font-bold text-xl">United</div>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="#" className="hover:text-blue-600">Book</a></li>
        <li><a href="#" className="hover:text-blue-600">Check-in</a></li>
        <li><a href="#" className="hover:text-blue-600">My Trips</a></li>
      </ul>
    </nav>
  );
}