import React from 'react';
// import axios from './utils/axios';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
      
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        

      </Routes>
  

    </div>
  );
}

export default App;
