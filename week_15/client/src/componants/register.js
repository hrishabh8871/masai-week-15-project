  import React, { Fragment } from 'react';
import '../App.css';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { addUserId } from '../actions/action'
import axios from 'axios'
class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        userName:'',
        passcode:'',
        email: '',
        mobile: '',
        reffer : false
        // reffer: false,
       
       
    };
}
handleChange = (event) => {    
    this.setState({[event.target.name]:event.target.value});    
}

handleSubmit = (event) => {
  console.log(this.state.userName,this.state.email,
this.state.mobile,
    this.state.passcode,)
    event.preventDefault()    
    axios.post('http://localhost:5000/user/register', {
    name: this.state.userName,
    email: this.state.email,
    mobile: this.state.mobile,
    password: this.state.passcode,
   }).then((res) => {
     console.log(res)
     if(res.data == 'User Exited') {
       alert('You Registed With Us Please Login')
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
      <Redirect to="/" />
     );
    }
    return (
      <div className = 'App'>
       {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type = 'text' name = 'userName' onChange = {(e) => this.handleChange(e)} value ={this.state.userName} placeholder = 'Enter User Name' />
        </label><br></br><br></br>
        <label>
          Email:
          <input type = 'email' name = 'email' onChange = {(e) => this.handleChange(e)} value ={this.state.email} placeholder = 'Enter Email' />
        </label><br></br><br></br>
        <label>
          Mobile:
          <input type = 'mobile' name = 'mobile' onChange = {(e) => this.handleChange(e)} value ={this.state.mobile} placeholder = 'Enter Mobile' />
        </label><br></br><br></br>
        <label>
          Passcode:
          <input type = 'password' name = 'passcode' onChange = {(e) => this.handleChange(e)} value ={this.state.passcode} placeholder = 'Enter Passcode' />
        </label><br></br>
       <input className ='btn bg-primary text-white' type="submit" value="Submit" />
      </form> */}


<div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
							<article>
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input name ="userName" onChange = {(e) => this.handleChange(e)} value ={this.state.userName} type="text" className="form-control" placeholder="Name" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input name ="email" onChange = {(e) => this.handleChange(e)} value ={this.state.email} type="email" className="form-control" placeholder="Email Address" />
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="mobile" onChange = {(e) => this.handleChange(e)} value ={this.state.mobile} type="mobile" class="form-control" placeholder="Mobile" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="passcode" onChange = {(e) => this.handleChange(e)} value ={this.state.passcode} type="password" className="form-control" placeholder="Password" />
										</div>
									</div>
									  <button type="submit" className="btn btn-success btn-block">Submit</button>
								</form>
							</article>
						</section></div>
      </div>
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

export default connect (mapStateToProps,mapDispatchToProps) (Register);