
import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductPage from './HomePage'
import RegisterPage from './RegisterPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import axios from 'axios';

import { Route, Switch } from 'wouter';
//  import './styles.css';

function App() {

 

  return (

    <>
      Above Navbar
      <Navbar/>
      Between Navbar and Switch

      <Switch>
        Inside Switch
        <Route path="/"           component={HomePage} />
        <Route path="/products"   component={ProductPage} />
        <Route path="/register"   component={RegisterPage} />
        <Route path="/about"      component={AboutPage} />
        <Route path="/contact"    component={ContactPage} />
        
      </Switch>

      Before Footer
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>

      </footer>
      After Footer
      <p></p>
        <button>  Footer </button>
    </>
  );
}  //  function App() {

export default App;