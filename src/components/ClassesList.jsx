import React, { Component, Fragment } from 'react'
import axios from 'axios'

export class Classes extends Component {
  state = {
    classes: [],
  }

  componentDidMount() {
    const url = 'http://localhost:8888/swimschool/api/api.php?action=allclasses'
    const fetchClasses = async () => {
      const { data } = await axios.get(url)
      this.setState({ classes: data })
    }
    fetchClasses()
  }

  render() {
    const data = this.state.classes.data
    if (data)
      return (
        <Fragment>
          <h2>Classes</h2>
          <div className='row'>
            {data.map((c) => (
              <div
                key={c.class_id}
                className='col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3'
              >
                {c.class_name}
              </div>
            ))}
          </div>
        </Fragment>
      )
    return <h2>The class list is empty</h2>
  }
}

export default Classes
