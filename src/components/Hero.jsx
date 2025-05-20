import React from 'react'

import { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Flight');
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('Economy');

  const tabs = ['Flight', 'Hotel', 'Car'];
  const cabinOptions = ['Economy', 'Business', 'First Class'];

  return (
    <section className="bg-blue-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Book a {activeTab}</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md border font-medium transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Booking Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 border rounded" placeholder="From" />
          <input className="p-3 border rounded" placeholder="To" />
          <input type="date" className="p-3 border rounded" />
          <input type="date" className="p-3 border rounded" />
          <div className="col-span-full grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Passengers</label>
              <input
                type="number"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="p-3 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Cabin Class</label>
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="p-3 border rounded w-full"
              >
                {cabinOptions.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="bg-blue-600 text-white py-3 rounded col-span-full mt-2">
            Find {activeTab}
          </button>
        </form>
      </div>
    </section>
  );
}
