import React, { Fragment } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class AdminHome extends React.Component{
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
      return (
        <div className ='row m-auto'>
     
       {
         this.state.foodDetails.map((item) => {
           return (
             item.userId == this.props.userId ? <div className ="col-lg-3 col-sm-4 col-md-4">
             <div class="card" style={{"width": "18rem"}}>
                   <img src={item.image} class="card-img-top" alt="..." />
                   <div class="card-body">
                     <h5 class="card-title">{item.title}<p class="card-title">price: {item.price} Rs</p></h5>
                     <p class="card-text">{item.description}</p>
                     <Link className="btn text-white bg-primary m-2">Edit</Link>
                     <Link className="btn text-white bg-danger m-2">Delete</Link>
                   </div>
                 </div>
           </div>: null             
                   
                     
           )
         })
       }
     </div>
   );

    }
  }
  
  // console.log(checkArr.length)
export default (AdminHome) 