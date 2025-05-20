import React from 'react'

import { FaExclamationTriangle } from 'react-icons/fa';

export default function Destinations() {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Explore destinations</h2>
        <p className="text-gray-600 mb-4">Not sure where to go? Use our interactive map to find flights to great destinations.</p>

        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center gap-2 mb-6">
          <FaExclamationTriangle />
          <span>Sorry, no results have been found. Please enter a different origin location or expand your search area.</span>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm mb-1">Flying from</label>
            <input type="text" defaultValue="Riyadh RUH" className="p-3 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm mb-1">Search type</label>
            <select className="p-3 border rounded w-full">
              <option>Roundtrip</option>
              <option>One way</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Dates</label>
            <input type="text" defaultValue="Flexible dates" className="p-3 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm mb-1">Max price</label>
            <div className="relative">
              <input type="text" defaultValue="$2,000" className="p-3 border rounded w-full" />
              <span className="absolute right-3 top-3 text-blue-600">⚙️</span>
            </div>
          </div>
        </form>

        <div className="flex items-center gap-4 mb-10">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-bold">Search</button>
          <a href="#" className="text-blue-700 flex items-center gap-1 font-medium">
            ➤ Refine search
          </a>
        </div>

         <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24185860.827160157!2d-140.84570490709604!3d42.27050525240959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2ssa!4v1747779230595!5m2!1sen!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="United States Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

