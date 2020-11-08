import React, { Component } from 'react'
import axios from 'axios'
import { baseUrl } from '../config.json'

export class Login extends Component {
  state = {
    username: '',
    passowrd: '',
  }

  submitHandler = async (e) => {
    try {
      e.preventDefault()
      const url = `${baseUrl}/api/api.php?action=login`
      const formData = { ...this.state }
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(url, formData, config)

      this.props.handleLogin(data.data)

      localStorage.setItem('user', JSON.stringify(data.data))

      this.props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-md-8 col-xl-6'>
          <h2 className='text-center'>Login Form</h2>
          <form onSubmit={this.submitHandler}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                id='username'
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
            </div>

            <button
              type='submit'
              style={{ fontSize: '1.2rem' }}
              className='btn btn-primary btn-block my-5 py-2'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
