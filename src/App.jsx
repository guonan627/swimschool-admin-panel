import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import ClassesList from './components/ClassesList'
import ProgramsList from './components/ProgramsList'
import Students from './components/Students'
import Register from './components/Register'
import Profile from './components/Profile'
import Logout from './components/Logout'

export class App extends Component {
  state = {
    user: {
      id: '123456',
      name: 'Nan',
    },
  }

  handleLogout() {
    this.setState({ user: null })
  }

  render() {
    return (
      <div className="container-xl bg-light">
        <BrowserRouter>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          <main>
            <Switch>
              <Route path="/" component={ProgramsList} exact />
              <Route path="/classes" component={ClassesList} />
              <Route path="/students" component={Students} />
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={Register} />
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
