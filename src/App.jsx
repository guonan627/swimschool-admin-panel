import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import ClassesList from './components/ClassesList'
import ProgramsList from './components/ProgramsList'
import Students from './components/Students'
import Register from './components/Register'
import Profile from './components/Profile'
import ProgramForm from './components/ProgramForm'
import ClassForm from './components/ClassForm'

export class App extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    // after app component is mounted, get user information from localstorage and save it into state
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      this.setState({ user: user })
    }
  }

  handleLogin = (user) => {
    this.setState({ user: user })
  }

  handleLogout = () => {
    this.setState({ user: null })
  }

  render() {
    return (
      <div className='container bg-light'>
        <BrowserRouter>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          <main>
            <Switch>
              <Route path='/programs/:id' component={ProgramForm} />
              <Route path='/classes/:id' component={ClassForm} />
              <Route path='/newprogram' component={ProgramForm} />
              <Route
                path='/login'
                render={(props) => (
                  <Login {...props} handleLogin={this.handleLogin} />
                )}
              />
              <Route path='/register' component={Register} />
              <Route path='/profile' component={Profile} />
              <Route
                path='/programs'
                render={(props) => (
                  <ProgramsList {...props} user={this.state.user} />
                )}
              />
              <Route path='/classes' component={ClassesList} />
              <Route path='/students' component={Students} />
              <Route exact path='/'>
                {this.state.user ? (
                  <Redirect to='/programs' />
                ) : (
                  <Login handleLogin={this.handleLogin} />
                )}
              </Route>
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
