import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './componants/navigation.js'
import { BrowserRouter, Route } from 'react-router-dom'
import CompanyLogo from './componants/companyLogo';
import Home from './componants/home';
import CartIcon from './componants/cart.js';
import CartDesign from './componants/cartDesign';
import Register from './componants/register';
import Login from './componants/login'
import Checkout from './componants/Checkout';
import AdminLogin from './componants/admin/adminLogin'
import AddFood from './componants/admin/addFood'
import AdminRegister from './componants/admin/adminRegister';
import AdminHome from './componants/admin/adminHome';


function App() {
  return (
    
      
      <BrowserRouter>
      <Navigation />
        <Route path = "/" exact component = {Home} />        
        <Route path = "/login" component = {Login} />           
        <Route path = "/register" component = {Register} />                
        <Route path = "/cart" component = {CartDesign} />                
        <Route path = "/checkout" component = {Checkout} />
        <Route path = "/admin" component = {AdminLogin} />
        <Route path = "/adminRegister" component = {AdminRegister} />
        <Route path = "/adminHome" component = {AdminHome} />
        <Route path = "/addFood" component = {AddFood} />   
      </BrowserRouter>        
    
  );
}

export default App;
