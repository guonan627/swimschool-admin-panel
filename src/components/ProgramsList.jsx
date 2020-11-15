import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config.json'

export class Programs extends Component {
  state = {
    programs: [],
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      return this.props.history.push('/login')
    }
    const url = `${baseUrl}/api/api.php?action=allprograms`
    const fetchPrograms = async () => {
      try {
        const { data } = await axios.get(url)
        this.setState({ programs: data.data })
      } catch (error) {
        console.log(error.response)
      }
    }
    fetchPrograms()
  }

  deleteProgram = async (program) => {
    if (window.confirm(`Delete ${program.program_name}?`)) {
      const url = `${baseUrl}/api/api.php?action=removeprogram&program_id=${program.program_id}`
      const token = JSON.parse(localStorage.getItem('user')).token
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      await axios.delete(url, config)
      const programs = this.state.programs.filter(
        (p) => p.program_id !== program.program_id
      )
      this.setState({ programs })
    }
  }

  render() {
    const { user } = this.props
    const data = this.state.programs

    if (data.length === 0) return <h2>The program list is empty</h2>
    return (
      <Fragment>
        <h2 className='text-center'>Programs</h2>
        {user && (
          <Link
            to='/newprogram'
            className='btn btn-secondary btn-lg m-2 float-right'
          >
            Create
          </Link>
        )}
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>PROGRAM</th>
              <th>LEVEL</th>
              <th>PRICE</th>
              <th>PREREQUISITES</th>
              <th>DURATION</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((program) => (
              <tr key={program.program_id}>
                <td width='30%'>{program.program_name}</td>
                <td width='10%'>{program.program_level}</td>
                <td width='10%'>{program.price}</td>
                <td width='30%'>{program.prerequisites}</td>
                <td width='10%'>{program.duration}</td>
                <td>
                  {user && (
                    <Link to={`/programs/${program.program_id}`}>
                      <div className='btn btn-info btn-sm'>Update</div>
                    </Link>
                  )}
                </td>
                <td>
                  {user && (
                    <button
                      onClick={() => this.deleteProgram(program)}
                      className='btn btn-danger btn-sm'
                    >
                      delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default Programs
