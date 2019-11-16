import React, { Fragment } from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { addUserId } from '../actions/action'
import Home from './home'
import axios from 'axios';
var getData = [];
var count = 0;
class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName:'',
            passcode:'',
            reffer: false,
           
           
        };
    }
    handleChange = (event) => {
        // console.log(this.state.userName,   this.state.passcode)
        // console.log('handle change called')
        this.setState({[event.target.name]:event.target.value});
        // console.log(event)
    }
    
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state.userName, this.state.passcode)
      axios.post('http://localhost:5000/user/login', {
        email : this.state.userName,
        password : this.state.passcode
      }).then((res) => {
        console.log(res)
        
        if(res.data == 'User Data Not Match' || res.data.personType == 'admin') {
          alert('User Data Not Match')
        }
        else {
          this.setState({
            reffer : true
          })
          this.props.addUserId(res.data.name)
        }
      }).catch((err) => {
        console.log(err)
      })     
                
    }; 
    render () {
        if(this.state.reffer) {
            return (  
              <Redirect to='/' />
            );
           }
        return (     
            <div>
               <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form onSubmit={this.handleSubmit} className="form-signin">
                    <div className="form-label-group">
                      <input onChange = {(e) => this.handleChange(e)} value ={this.state.userName} name = 'userName'  type="text" id="inputEmail" className="form-control" placeholder="Email" required autofocus />
                      <label for="inputEmail">Email</label>
                    </div>
      
                    <div class="form-label-group">
                      <input onChange = {(e) => this.handleChange(e)} value ={this.state.passcode} name = 'passcode'  type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                      <label for="inputPassword">Password</label>
                    </div>
      
                    <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" for="customCheck1">Remember password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <hr className="my-4" />                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
          // </div>
    );

    }
  }
  const mapStateToProps = (state) => {
    return {
        userList: state.userList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addUserId: item => {dispatch (addUserId(item))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);