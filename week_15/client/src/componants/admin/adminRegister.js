import React, { Fragment } from 'react';
import '../../App.css';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { addUserId } from '../../actions/action'
class AdminRegister extends React.Component {
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
    axios.post('http://localhost:5000/admin/register', {
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
        <Redirect to="/adminHome" />
     );
    }
    return (
      <div className = 'App'>       


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
                                <small><Link to="/admin">Already Member?</Link></small>
							</article>
						</section></div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addUserId: item => {dispatch (addUserId(item))}
    }
}


export default connect(null, mapDispatchToProps)(AdminRegister);