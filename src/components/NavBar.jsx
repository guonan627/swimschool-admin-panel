import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { showAlert } from '../utils/alerts'

export class NavBar extends Component {
  handleLogout() {
    localStorage.removeItem('user')
    this.props.handleLogout()
    showAlert('info', 'You have logged out')
    setTimeout(() => {
      window.location = '/'
    }, 1000)
  }

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light p-3 row'>
        <div className='col-6 d-flex justify-content-center'>
          <img width='80px' src='swim.png' alt='logo' />
          <Link className='navbar-brand' to='/'>
            Swimschool Admin Panel
          </Link>
        </div>

        <div
          className='collapse navbar-collapse col-6 d-flex justify-content-center'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav'>
            {!this.props.user && (
              <Fragment>
                <NavLink className='nav-item nav-link' to='/login'>
                  Login
                </NavLink>
                <NavLink className='nav-item nav-link' to='/register'>
                  Register
                </NavLink>
              </Fragment>
            )}
            {this.props.user && (
              <Fragment>
                <NavLink className='nav-item nav-link' to='/'>
                  Programs
                </NavLink>
                <NavLink className='nav-item nav-link' to='/classes'>
                  Classes
                </NavLink>
                <NavLink className='nav-item nav-link' to='/students'>
                  Students
                </NavLink>
                <NavLink className='nav-item nav-link' to='/profile'>
                  {this.props.user.name}
                </NavLink>
                <NavLink
                  className='nav-item nav-link'
                  to='#'
                  onClick={() => this.handleLogout()}
                >
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
