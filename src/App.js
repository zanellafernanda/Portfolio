import React from 'react'

import './App.scss';

import { About, Footer, Header, Skills, /* Testimonial ,*/ Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />


      <Footer />
    </div>
  );
}

export default App