import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default function InfoLinks() {
  const cards = [
    {
      title: 'Plan your trip',
      desc: 'Find a destination and any entry requirements.',
      active: true
    },
    {
      title: 'Visit the Help Center',
      desc: 'Find info on refunds, bags, seats and more.',
    },
    {
      title: 'Stay connected',
      desc: 'Get Wi-Fi for your next flight.',
    },
    {
      title: 'Time to start packing',
      desc: 'Learn more about bringing bags on your trip.',
    },
    {
      title: 'What to know before you go',
      desc: 'The world of travel has changed, find out how.',
    },
    {
      title: 'See what’s on your flight',
      desc: 'View your seating, food and entertainment options.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold mb-6">Useful links for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border ${
                card.active ? 'border-blue-600 text-blue-600' : 'border-gray-200'
              } p-4 rounded-lg flex justify-between items-start hover:shadow-md transition`}
            >
              <div>
                <h3 className="font-bold text-black mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
              <FaArrowRight className="text-blue-600 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


