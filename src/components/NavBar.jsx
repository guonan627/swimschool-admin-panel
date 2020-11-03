import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <img width="80px" src="swim.png" alt="logo" />
        <Link className="navbar-brand" to="/">
          Swimschool Admin Panel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">
              Programs
            </NavLink>
            <NavLink className="nav-item nav-link" to="/classes">
              Classes
            </NavLink>
            <NavLink className="nav-item nav-link" to="/students">
              Students
            </NavLink>
            {!this.props.user && (
              <Fragment>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                  Register
                </NavLink>
              </Fragment>
            )}
            {this.props.user && (
              <Fragment>
                <NavLink className="nav-item nav-link" to="/profile">
                  {this.props.user.name}
                </NavLink>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              </Fragment>
            )}
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
