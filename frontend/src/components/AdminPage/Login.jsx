import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { baseUrl } from '../../Constants';

const LoginWrapper = () => {
  const navigate = useNavigate();

  const handleLogin = (jwtToken) => {
    // Retrieving JWT token from sessionStorage
    console.log("login successfull");
    navigate('/admin/dashboard'); // Redirect to /admin/dashboard
  };
  return <Login onLogin={handleLogin} />;
};

export default LoginWrapper;

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogin = (jwtToken) => {
    localStorage.setItem('jwtToken', jwtToken);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    try {
      const response = await fetch(`${baseUrl}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
        credentials: 'include', // Include credentials (cookies) with the request
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        console.log('Login successful!');
        // Handle successful login, e.g., redirect to the dashboard
        this.props.onLogin(data.jwtToken);
      } else {
        console.log('Login failed!');
        // Handle login failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.log('Error during login:', error);
      // Handle other errors, e.g., network error
    }
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
                type="text"
                className="form-control"
                placeholder="Enter username"
                onChange={(e) => this.setState({ username: e.target.value })}
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
//export default withRouter(Login);
