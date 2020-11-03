import React, { Component, Fragment } from 'react'
import axios from 'axios'

export class Programs extends Component {
  state = {
    programs: [],
  }

  componentDidMount() {
    const url = 'http://localhost:8888/swimschool/api/api.php?action=allprograms'
    const fetchPrograms = async () => {
      const { data } = await axios.get(url)
      this.setState({ programs: data })
    }
    fetchPrograms()
  }

  deleteProgram = (program) =>{
    const programs = this.state.programs.filter(p =>p._id !== program._id);
    this.setState({programs});
    // console.log(program);

  };

  render() {
    const data = this.state.programs.data
    if (data)
      return (
        <Fragment>
          <h2>Programs</h2>  
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
              {data.map((program) => (
                <tr>
                  <td>{program.program_name}</td>
                  <td>{program.program_level}</td>
                  <td>{program.price}</td>
                  <td>{program.prerequisites}</td>
                  <td>{program.duration}</td>
                  <td><button onClick={() => this.deleteProgram(program)} className="btn btn-danger btn-sm">delete</button></td>
                  <td><button className="btn btn-success btn-sm">update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )
    return <h2>The program list is empty</h2>
  }
}

export default Programs
