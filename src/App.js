import React from 'react';
import ReactDOM from "react-dom";
import {Routes,Route} from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
// import OurPatients from './components/OurPatients';
import Navbar from './navbar/Navbar';
import Home from './components/Home';
import OurScience from './components/OurScience';
import CardData from './components/CardData';
import Display from './components/Display';


function App() {
  return (
    <div>
     
      <Routes>
        <Route path='/'element={<CardData/>}/>
        <Route path='/Home'element={<Navbar/>}/>
        <Route path='/AboutUs'element={<AboutUs/>}/>
        <Route path='/OurScience'element={<OurScience/>}/>
        <Route path='/OurPatients/Display/:id'element={<Display/>}/>
        <Route path='/OurPatients'element={<Display/>}/>
        <Route path='/Events'element={<Events/>}/>
      
      </Routes>

    </div>
  );
}

export default App;
