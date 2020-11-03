import React, { Component } from 'react'
import axios from 'axios'
import Classes from './Classes'
import { baseUrl } from '../config.json'

export class ClassesList extends Component {
  state = {
    classes: [],
  }

  componentDidMount() {
    const url = `${baseUrl}/api/api.php?action=allclasses`
    const fetchClasses = async () => {
      const { data } = await axios.get(url)
      this.setState({ classes: data.data })
    }
    fetchClasses()
  }

  deleteClass = classItem => {
    const classes = this.state.classes.filter(
      c => c.class_id !== classItem.class_id
    )
    this.setState({ classes })
  }

  render() {
    const data = this.state.classes
    if (data.length === 0)
      return <h2 className="p-5">The class list is empty</h2>
    return (
      <div className="p-1">
        <h2 className="text-center">Classes</h2>
        <div className="row">
          {data.map(c => (
            <div
              key={c.class_id}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-4 p-3"
            >
              <Classes c={c} deleteClass={this.deleteClass} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ClassesList
