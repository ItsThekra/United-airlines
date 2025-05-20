import React from 'react'

export default function Banner() {
  return (
    <section className="bg-blue-100 text-center py-10 px-6">
      <h2 className="text-xl font-semibold mb-2">Free Wi-Fi on select flights</h2>
      <p className="mb-4">Stay connected while you fly</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded">Join Now</button>
    </section>
  );
}