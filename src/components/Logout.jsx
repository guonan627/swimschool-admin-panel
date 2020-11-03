import React, { Component } from 'react'

class Logout extends Component {
  componentDidMount() {
    console.log('Logout')
    window.location = '/'
  }
  render() {
    return <h1>Logging you out...</h1>
  }
}

export default Logout
