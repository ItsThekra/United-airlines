import React from 'react'

export default function Footer() {
  const links = [
    'Contract of carriage',
    'Lengthy tarmac delay plan',
    'Legal information',
    'Our United Customer Commitment',
    'Help Center',
    'Accessible travel',
    'Privacy Policy',
    'Do Not Sell or Share My Personal Information',
    'Interest Based Ads',
    'United Jetstream',
    'Cargo',
    'Electronic Invoice'
  ];

  return (
    <footer className="bg-black text-white text-sm px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        <button className="border border-white rounded-full px-6 py-2 flex items-center gap-2 hover:bg-white hover:text-black">
          🔍 Search
        </button>

        <div className="flex flex-wrap justify-center gap-4 text-blue-400 text-xs text-center">
          {links.map((link, i) => (
            <a key={i} href="#" className="hover:underline">
              {link} {['Interest Based Ads', 'Cargo', 'Electronic Invoice'].includes(link) && <span>↗</span>}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          ⬛ Indicates an external site that may or may not meet accessibility guidelines. Copyright © 2025 United Airlines, Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-8 mt-4">
          <img src="https://www.united.com/favicon.ico" alt="United Logo" className="w-10 h-10" />
          <span>⭐ Star Alliance MEMBER</span>
        </div>

        <button className="mt-6 border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black">
          ➤ CoBrowse
        </button>
      </div>
    </footer>
  );
}
