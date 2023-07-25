import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default class Login extends Component {

  constructor (props){
    super (props)
    this.state={
      email:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e){
    e.preventDefault();
    const{email, password}=this.state;
    console.log(email,password);
    fetch("http://localhost:5000/loginuser", {
      method: "post",
      crossDomain: true,
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
        "Acces-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister")
      });

  }
  render() {
    return (
<>
      <nav className="bg-secondary  navbar navbar-expand-lg  fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/Sign-in'}>
              Navbar
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        
      
      <form onSubmit={this.handleSubmit}>
    
       <div className=' pt-5'>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-4 col-lg-3 pt-5  ">
          <label></label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-2">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-0">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-0">
          Forgot <a href="#">password?</a>
        </p>
        </div>
      </form>

</>
    )
  }
}
