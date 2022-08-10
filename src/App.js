import React from 'react';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import Footer from './Components/Footer';
import ProductsAndServices from './pages/productsAndServices';
import Service from './pages/service';
import Adminlogin from './pages/adminlogin';
import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Adminhome from './pages/Adminhome';
import Powerplants from './pages/powerplants';
import Panels from './pages/panels';
import Pumps from './pages/pumps';
import Inverters from './pages/inverters';
import Connectors from './pages/connectors';
import Others from './pages/others';
import Orders from './pages/orders';
import AboutUs from './pages/Aboutus';


function App() {
  return (
    <Router>
      {
      window.location.pathname!=='/adminhome' ? <Header/>:null
     }
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productsAndServices" element={<ProductsAndServices />}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/adminlogin" element={<Adminlogin/>}></Route>
        <Route path="/adminhome" element={<Adminhome/>}></Route>
        <Route path="/powerplants" element={<Powerplants/>}></Route>
        <Route path="/panels" element={<Panels/>}></Route>
        <Route path="/pumps" element={<Pumps/>}></Route>
        <Route path="/inverters" element={<Inverters/>}></Route>
        <Route path="/connectors" element={<Connectors/>}></Route>
        <Route path="/others" element={<Others/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>


      </Routes>
      {
      window.location.pathname!=='/adminhome' ? <Footer/>:null
     }
    </Router>
  );
}

export default App;
