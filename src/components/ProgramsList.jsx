import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { baseUrl } from '../config.json'

export class Programs extends Component {
  state = {
    programs: [],
  }

  componentDidMount() {
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

  deleteProgram = program => {
    const programs = this.state.programs.filter(
      p => p.program_id !== program.program_id
    )
    this.setState({ programs })
  }

  render() {
    const data = this.state.programs
    if (data.length === 0) return <h2>The program list is empty</h2>
    return (
      <Fragment>
        <h2 className="text-center">Programs</h2>
        <button className="btn btn-primary btn-md">create</button>
        <table className="table">
          <thead>
            <tr>
              <th>program</th>
              <th>level</th>
              <th>price</th>
              <th>prerequisites</th>
              <th>duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(program => (
              <tr key={program.program_id}>
                <td width="30%">{program.program_name}</td>
                <td width="10%">{program.program_level}</td>
                <td width="10%">{program.price}</td>
                <td width="40%">{program.prerequisites}</td>
                <td width="10%">{program.duration}</td>
                <td>
                  <button className="btn btn-info btn-sm">update</button>
                </td>
                <td>
                  <button
                    onClick={() => this.deleteProgram(program)}
                    className="btn btn-danger btn-sm"
                  >
                    delete
                  </button>
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
