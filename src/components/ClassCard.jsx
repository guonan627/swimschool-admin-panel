import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config.json'

export class Classes extends Component {
  render() {
    const c = this.props.c
    return (
      <div className='card my-3 rounded'>
        <Link to={`/classes/${c.class_id}`}>
          <img
            className='card-img-top'
            src={`${baseUrl}/${c.pics}`}
            alt={c.program_name}
          />
        </Link>
        <div className='card-body'>
          <Link to={`/classes/${c.class_id}`}>
            <div className='card-title'>
              <strong>{c.program_name}</strong>
            </div>
          </Link>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Start: {c.start_date}</li>
            <li className='list-group-item'>End: {c.end_date}</li>
            <li className='list-group-item'>Time: {c.time}</li>
            <li className='list-group-item'>Price: ${c.price}</li>
            <li className='list-group-item'>
              Max Student: {c.max_number} people
            </li>
            <li className='list-group-item'>
              Enrolled Student:{c.cur_number} people
            </li>
          </ul>
          <div className='card-body d-flex justify-content-around'>
            <Link to={`/classes/${c.class_id}`}>
              <div className='btn btn-info'>Update</div>
            </Link>
            <div
              onClick={() => this.props.deleteClass(c)}
              className='btn btn-danger'
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Classes
