import React, { Fragment } from 'react';
import '../../App.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class AddFood extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        title:'',
        resturantName:'',
        price: '',
        image: '',
        description: '',
        paragraph: '',
        reffer : false
        
       
       
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
    console.log(this.state.title, this.state.resturantName, this.state.price, this.state.image, this.state.description, this.state.paragraph)  
    axios.post('http://localhost:5000/admin/addFood', {
        title: this.state.title,
        resturantName: this.state.resturantName,
        price: this.state.price,
        image: this.state.image,
        description: this.state.description,
        paragraph: this.state.paragraph,
    }).then((res) => {
        console.log(res)
        this.setState({
            reffer: true
          })
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
      <div className = 'App'>       


<div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
							<article>
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input name ="title" onChange = {(e) => this.handleChange(e)} value ={this.state.title} type="text" className="form-control" placeholder="Title" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input name ="resturantName" onChange = {(e) => this.handleChange(e)} value ={this.state.resturantName} type="text" className="form-control" placeholder="Resturant Name" />
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="price" onChange = {(e) => this.handleChange(e)} value ={this.state.price} type="text" class="form-control" placeholder="Price" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="image" onChange = {(e) => this.handleChange(e)} value ={this.state.image} type="text" className="form-control" placeholder="Image Url" />
										</div>
									</div>
                                    <div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="description" onChange = {(e) => this.handleChange(e)} value ={this.state.description} type="text" className="form-control" placeholder="Description" />
										</div>
									</div>
                                    <div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="paragraph" onChange = {(e) => this.handleChange(e)} value ={this.state.paragraph} type="text" className="form-control" placeholder="Usual Delivery Time" />
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


export default (AddFood);