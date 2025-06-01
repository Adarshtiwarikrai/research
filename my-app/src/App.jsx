import React from 'react';
import './App.css'; // Remove this line if it exists
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="about" className="section-anchor"></div>
      <Benefits />
      <div id="dashboard" className="section-anchor"></div>
      <WhyChooseUs />
      <Services />
      <CallToAction />
      <div id="contact" className="section-anchor"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;