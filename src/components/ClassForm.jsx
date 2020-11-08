import React, { Component } from 'react'
import axios from 'axios'
import { baseUrl } from '../config.json'

export class ClassForm extends Component {
  state = {
    start_date: '',
    end_date: '',
    daytime: '',
    time: '',
    trainer_name: '',
    max_number: '',
    cur_number: '',
    status: 'not full',
  }

  // populate form with the class data from API
  componentDidMount() {
    // get class_id from react-router-dom "match" props
    const url = `${baseUrl}/api/api.php?action=classbyid&class_id=${this.props.match.params.id}`
    const fetchClass = async () => {
      const { data } = await axios.get(url)
      this.setState({
        start_date: data.data.start_date,
        end_date: data.data.end_date,
        daytime: data.data.daytime,
        time: data.data.time,
        trainer_name: data.data.trainer_name,
        max_number: data.data.max_number,
        cur_number: data.data.cur_number,
        status: data.data.status,
      })
    }
    fetchClass()
  }

  submitHandler = (e) => {
    e.preventDefault()
    const formData = { ...this.state }
    console.log(formData)
  }

  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-md-8 col-xl-6'>
          <h2 className='text-center'>Class Details</h2>
          <form onSubmit={this.submitHandler}>
            <div className='form-group'>
              <label htmlFor='start_date'>Start Date</label>
              <input
                type='text'
                className='form-control'
                id='start_date'
                value={this.state.start_date}
                onChange={(e) => this.setState({ start_date: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='end_date'>End Date</label>
              <input
                type='text'
                className='form-control'
                id='end_date'
                value={this.state.end_date}
                onChange={(e) => this.setState({ end_date: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='daytime'>Day of the week</label>
              <input
                type='text'
                className='form-control'
                id='daytime'
                value={this.state.daytime}
                onChange={(e) => this.setState({ daytime: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='time'>Class Time</label>
              <input
                type='text'
                className='form-control'
                id='time'
                value={this.state.time}
                onChange={(e) => this.setState({ time: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='trainer_name'>Trainer</label>
              <input
                type='text'
                className='form-control'
                id='trainer_name'
                value={this.state.trainer_name}
                onChange={(e) =>
                  this.setState({ trainer_name: e.target.value })
                }
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='max_number'>Max number of students</label>
              <input
                type='text'
                className='form-control'
                id='max_number'
                value={this.state.max_number}
                onChange={(e) => this.setState({ max_number: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='cur_number'>Current number of students</label>
              <input
                type='text'
                className='form-control'
                id='cur_number'
                value={this.state.cur_number}
                onChange={(e) => this.setState({ cur_number: e.target.value })}
              ></input>
            </div>

            <div className='form-group'>
              <label htmlFor='status'>Status</label>
              <select
                id='status'
                className='form-control'
                value={this.state.status}
                onChange={(e) => this.setState({ status: e.target.value })}
              >
                <option value='not full'>Not Full</option>
                <option value='full'>Full</option>
              </select>
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

export default ClassForm
