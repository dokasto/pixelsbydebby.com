import React from 'react';
import './App.css';
import Intro from './Intro';
import MyWorks from './MyWorks';
import Navbar from './Navbar';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="intro">
        <Intro />
      </section>
      <section id="works">
        <MyWorks />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
