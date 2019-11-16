import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { addUserId } from '../../actions/action'
import { connect } from 'react-redux'
class AdminLogin extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName:'',
            passcode:'',
            reffer: false,
           
           
        };
    }
    handleChange = (event) => {      
        this.setState({[event.target.name]:event.target.value});        
    }
    
    handleSubmit = (event) => {
        event.preventDefault()        
        
        axios.post('http://localhost:5000/admin/login', {          
          email: this.state.userName,          
          password: this.state.passcode,
        }).then((res) => {
          console.log(res)
          if(res.data == 'User Data Not Match') {
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
                <Redirect to="/adminHome"/>
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
                      <input onChange = {(e) => this.handleChange(e)} value ={this.state.userName} name = 'userName'  type="text" id="inputEmail" className="form-control" placeholder="User Name" required autofocus />
                      <label for="inputEmail">User Name</label>
                    </div>
      
                    <div class="form-label-group">
                      <input onChange = {(e) => this.handleChange(e)} value ={this.state.email} name = 'passcode'  type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                      <label for="inputPassword">Password</label>
                    </div>
      
                    <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" for="customCheck1">Remember password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <Link to='/adminRegister'>Not Register with Us?</Link>
                    <hr className="my-4" />
                    {/* <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
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

export default connect (mapStateToProps,mapDispatchToProps) (AdminLogin);