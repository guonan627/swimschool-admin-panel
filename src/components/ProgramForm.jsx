import React, { Component } from 'react'
import axios from 'axios'
import { baseUrl } from '../config.json'

export class ProgramForm extends Component {
  state = {
    program_name: '',
    description: '',
    program_level: '',
    price: '',
    prerequisites: '',
    duration: '',
    pics: '',
  }

  // populate form with the program data from API
  componentDidMount() {
    // get program_id from react-router-dom "match" props
    const url = `${baseUrl}/api/api.php?action=findprogram&program_id=${this.props.match.params.id}`
    const fetchProgram = async () => {
      const { data } = await axios.get(url)
      this.setState({
        program_name: data.data.program_name,
        description: data.data.description,
        program_level: data.data.program_level,
        price: data.data.price,
        prerequisites: data.data.prerequisites,
        duration: data.data.duration,
        pics: data.data.pics,
      })
    }
    fetchProgram()
  }

  submitHandler = async (e) => {
    try {
      e.preventDefault()
      const url = `${baseUrl}/api/api.php?action=editprogram&program_id=${this.props.match.params.id}`
      const token = JSON.parse(localStorage.getItem('user')).token
      const formData = { ...this.state }
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const res = await axios.post(url, formData, config)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-md-8 col-xl-6'>
          <h2 className='text-center'>Program Details</h2>
          <form onSubmit={this.submitHandler}>
            <div className='form-group'>
              <label htmlFor='program_name'>Program Name</label>
              <input
                type='text'
                className='form-control'
                id='program_name'
                value={this.state.program_name}
                onChange={(e) =>
                  this.setState({ program_name: e.target.value })
                }
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                className='form-control'
                id='description'
                style={{ minHeight: '10rem' }}
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              ></textarea>
            </div>

            <div className='form-group'>
              <label htmlFor='program_level'>Program Level</label>
              <select
                id='program_level'
                className='form-control'
                value={this.state.program_level}
                onChange={(e) =>
                  this.setState({ program_level: e.target.value })
                }
              >
                <option value='level 1'>Level 1</option>
                <option value='level 2'>Level 2</option>
                <option value='level 3'>Level 3</option>
                <option value='level 4'>Level 4</option>
                <option value='level 5'>Level 5</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='price'>Price</label>
              <input
                type='text'
                className='form-control'
                id='price'
                value={this.state.price}
                onChange={(e) => this.setState({ price: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='prerequisites'>Prerequisites</label>
              <input
                type='text'
                className='form-control'
                id='prerequisites'
                value={this.state.prerequisites}
                onChange={(e) =>
                  this.setState({ prerequisites: e.target.value })
                }
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='duration'>Duration</label>
              <input
                type='text'
                className='form-control'
                id='duration'
                value={this.state.duration}
                onChange={(e) => this.setState({ duration: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='pics'>Image URL</label>
              <input
                type='text'
                className='form-control'
                id='pics'
                value={this.state.pics}
                onChange={(e) => this.setState({ pics: e.target.value })}
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

export default ProgramForm
