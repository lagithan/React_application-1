
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyleWrapper from './GlobalStyleWrapper'; 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contactus';
import Navbar from './components/Navbar';
import { Theme_provider,ThemeContext} from './Theme';

function App() {
  return (
    <Theme_provider>
      <GlobalStyleWrapper />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact/*" element={<Contact />} />
        </Routes>
      </Router>
    </Theme_provider>
  );
}

export default App;
