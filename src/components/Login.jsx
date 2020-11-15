import React, { Component } from 'react'
import axios from 'axios'
import { baseUrl } from '../config.json'
import { showAlert } from '../utils/alerts'

export class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  submitHandler = async (e) => {
    e.preventDefault()

    const url = `${baseUrl}/api/api.php?action=login`
    const formData = { ...this.state }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const { data } = await axios.post(url, formData, config)

      this.props.handleLogin(data.data)

      localStorage.setItem('user', JSON.stringify(data.data))

      showAlert('success', 'You have successfully logged in')

      if (this.props.history) {
        this.props.history.push('/programs')
      }
    } catch (error) {
      const message = !error.response
        ? 'Network Error'
        : error.response.data.messages[0]
        ? error.response.data.messages[0] // custom message from api
        : error.response // general message

      showAlert('error', message)
    }
  }

  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-md-8 col-xl-6'>
          <h2 className='text-center'>Login Form</h2>
          <form onSubmit={this.submitHandler} className='was-validated'>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                id='username'
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
                required
                pattern='[\w]{1,50}'
              ></input>
              <div className='invalid-feedback'>Username is invalid</div>
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                required
                pattern='[\w\S]{4,50}'
              ></input>
              <div class='invalid-feedback'>Password is invalid</div>
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
