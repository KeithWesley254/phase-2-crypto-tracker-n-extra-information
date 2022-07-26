import '../App.css';
import FeedBack from "./FeedBack";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoTracker from './CryptoTracker';
import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';

function App() {

  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route exact="true" path="/" element={<HomePage />}/>
    <Route exact="true" path="/cryptotracker" element={<CryptoTracker />}/>
    <Route path='/feedback' element={<FeedBack />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
