import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import InfoLinks from './components/InfoLinks';
import Banner from './components/Banner';
import PopularTopics from './components/PopularTopics';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <InfoLinks />
      <Banner />
      <PopularTopics />
      <Footer />
    </>
  );
}

export default App;
