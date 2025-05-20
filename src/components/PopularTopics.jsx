import React from 'react'
import { FaWifi, FaPlane, FaDog, FaUser, FaSuitcase, FaDollarSign, FaSearch, FaHeadset, FaBookmark } from 'react-icons/fa';

export default function PopularTopics() {
  const topics = [
    { icon: <FaWifi />, label: 'Wi-Fi' },
    { icon: <FaBookmark />, label: 'MileagePlus' },
    { icon: <FaPlane />, label: 'Change flight' },
    { icon: <FaSuitcase />, label: 'Baggage' },
    { icon: <FaUser />, label: 'United Club' },
    { icon: <FaDog />, label: 'Traveling with pets' },
    { icon: <FaDollarSign />, label: 'Refund' },
    { icon: <FaHeadset />, label: 'Help Center' }
  ];

  return (
    <section className="bg-[#022d62] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular topics</h2>
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search united"
              className="w-full p-3 pl-4 pr-10 rounded-md text-black"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {topics.map((item, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="text-white text-lg">{item.icon}</div>
              <a href="#" className="underline hover:text-blue-300">{item.label}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
