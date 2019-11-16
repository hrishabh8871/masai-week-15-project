import React, { Fragment } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { addUser, addCart } from '../actions/action'
var checkArr = [];
class HomeProduct extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      foodDetails : []
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:5000/home')
    .then((res) => {
      console.log(res)
      this.setState({
        foodDetails : res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
    render () {
      checkArr.push(this.props.userList)
      const checkUser = (see) => {
        if(checkArr.length === 1) {
            alert('Please Login')
        }
        else {
          var cartId = JSON.stringify(see.target.name)
          // console.log(cartId);
          // cartItem.push();
          // console.log(cartItem);
          alert("Successfull Added To Your Cart");
          this.props.cartSend(Number(JSON.parse(cartId)))
          
          
        }
      }
      return (
        <div className ='row m-auto'>
     
       {
         this.state.foodDetails.map((item) => {
           return (
             <div className ="col-lg-3 col-sm-4 col-md-4">
               <div class="card" style={{"width": "18rem"}}>
                     <img src={item.image} class="card-img-top" alt="..." />
                     <div class="card-body">
                       <h5 class="card-title">{item.title}<p class="card-title">price: {item.price} Rs</p></h5>
                       <p class="card-text">{item.description}</p>
                       <input type = "submit" onClick = {(name) => checkUser(name)} name = {item.id} value = "Add to cart" class="btn btn-primary" />
                     </div>
                   </div>
             </div>             
                   
                     
           )
         })
       }
     </div>
   );

    }
  }
  
  // console.log(checkArr.length)


function mapStateToProps (state) {
    return {
      foodDetails: state.foodDetails,    
    }
  }
  

function mapDispatchToProps(dispatch) {
 return {
      cartSend: (c) => {dispatch(addCart(c))},
      // itemShow: (s) => {dispatch({type: 'ITEM_SHOW', payload: s})}
    }
  }
export default connect (mapStateToProps, mapDispatchToProps) (HomeProduct) 