import React, { Component } from 'react'

class Logout extends Component {
  componentDidMount() {
    this.props.logout()
    window.location = '/'
  }
  render() {
    return null
  }
}

export default Logout
