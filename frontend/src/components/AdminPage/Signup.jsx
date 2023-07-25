import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",

    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "post",
      crossDomain: true,
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
        "Acces-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
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
      <nav className="  bg-secondary navbar navbar-expand-lg navbar-light fixed-top">
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


      <form onSubmit={this.handlesubmit}>
        
      <div className=' pt-5'>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-5">
          <label></label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-2">
          <label></label>
          <input type="text" className="form-control" placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })} />
        </div>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-2">
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

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-2">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-2">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        </div>
      </form>

      </>
    )
  }
}
