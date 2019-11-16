import React from 'react';
import '../App.css';
import {Link, Route} from 'react-router-dom';
import CompanyLogo from './companyLogo';
import CartIcon from './cart.js';
import { connect } from 'react-redux'

var userData = [];

function Navigation (props) {
    userData.push(props.userList)
    console.log(userData)
        return (
            <div>
                <div className = "navbar navbar-expand-lg navbar-light bg-white navbar-fixed-top">
                <div className = "navbar-brand">
                     <CompanyLogo />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto col-lg-8">               
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/">Home</Link>             
                            </React.Fragment>
                            
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/NewArrival"> <img src="https://img.icons8.com/color/30/000000/two-smartphones.png"/>App</Link>             
                            </React.Fragment>
                            
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/specialRestaurant">Special Restaurant</Link>             
                            </React.Fragment>
                           
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/NewArrival"> Offer Zone</Link>             
                            </React.Fragment>                        
                        </li>
                        <li className="nav-item">                        
                            <React.Fragment>
                                    <Link to="/admin">Resturant Panel</Link>             
                            </React.Fragment>                    
                        </li>
                    </ul>
                 
                    <div>
                    <React.Fragment>
                            <Link to="/cart"> <CartIcon /></Link>             
                    </React.Fragment>
                        
                    </div>
                    
                    <div class="dropdown m-1">
                    <button class="btn btn-secondary dropdown-toggle bg-white text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       {name()}
                    </button>
                   
                    {getStatus()}
                    
                    
                    
               </div>
                    
            </div>     
                
            </div>
          
           
                
           
            </div>
        );
}
const mapStateToProps = (state) => {
    return {
        userList: state.userList
    };
};
function getStatus ()  {
    // console.log(userData.length)
    if(userData.length === 1) {
        // getUserName = 'User'
        return (
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <React.Fragment>
                                <Link to="/login"> Login</Link>             
                        </React.Fragment><br></br>
                        <React.Fragment>
                                <Link to="/register"> Sign-Up</Link>             
                        </React.Fragment>
                        
                    </div>
        );
    }
    else {
      return (
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <React.Fragment>
                    <Link to="/login">My order</Link>             
            </React.Fragment><br></br>
            <React.Fragment>
                    <Link to="/signUp">History</Link>             
            </React.Fragment><br></br>
            <React.Fragment>
                <a href ="/">Sign Out</a>           
            </React.Fragment>
            
        </div>
      );  
    }
}
function name () {
    if(userData.length === 1) {
        return (
            <p>Hi User</p>
        )
    }
    else {
        return (
            <p>Hi {userData[1]}</p>
            
        )
    }
}


export default connect (mapStateToProps, null) (Navigation);