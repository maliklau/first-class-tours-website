import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import AboutUs from './components/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NYC from './components/places/NYC';
import WashingtonDC from './components/places/WashingtonDC';
import RequestQuote from './components/RequestQuote';
import Mackinac from './components/places/Mackinac';
import Custom from './components/places/Custom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/newyorkcity" element={<NYC />} />
        <Route path="/washingtondc" element={<WashingtonDC />} />
        <Route path="mackinacisland" element={<Mackinac />} />
        <Route path="/customtours" element={<Custom />} />
        <Route path="/quote" element={<RequestQuote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
