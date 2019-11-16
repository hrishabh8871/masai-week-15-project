import React from 'react';
import logo from '../logo.svg';
import '../App.css';
// import CartShow from './cartShow'
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
// import Checkout from './Checkout'
// var cartArr = [];

var price = 0;

class CartDesign extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            
        }
    }
  
    render () {
      const cartStatus = () => {
        console.log(this.props.cartItem.length)
        if(this.props.cartItem != 0) {         
          return (
            <div>
            {/* <p className ="display-4">Your Shopping Bag Is Not Empty</p> */}
            {
              this.props.foodDetails.map((item,index) => {
                for(var i = 0; i < this.props.cartItem.length; i++) {
                  if(item.id === this.props.cartItem[i]) {
                    price += Number(item.price)
                    console.log(price)
                    return (
                      <div>
                        
                        <div class="card mb-3 w-50">
                        <img src= {item.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <p class="card-text">{item.description}</p>
                          <p class="card-text"><small class="h6">{item.price} Rs</small></p>
                        </div>
                      </div>
                      </div>
                    );
                  }
                }
                
              })
            }
            <div>
              <div>
                <h1>Total Amount To be Paid: {price} Rs</h1>
              </div>
              <div className ="float-right mr-5 btn bg-success">
                  <React.Fragment>
                      <Link className ="text-white w-50" to="/checkout">Click to Pay</Link>             
                  </React.Fragment>
              </div>  
            </div>
          </div>
          )
          
        }
        else {
         return (
          <div>
          <p className ="display-4">Your Shopping Bag Is Empty!</p>
         </div>
         )
      
        }
        
      }
      
  
        return (
           <div>
             {
               cartStatus()
             }
              
            {/* <div className ="float-right mr-5 btn bg-dark">
                <React.Fragment>
                    <Link to="/checkout">Click to Pay</Link>             
                </React.Fragment>
            </div>   */}
         
           </div>
        )
        
    }
}


const mapStateToProps = (state) => {
  return {
    cartItem: state.cartItem,
    foodDetails: state.foodDetails,
  }
}
export default connect (mapStateToProps, null) (CartDesign);