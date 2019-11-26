import React, { Component } from 'react'
import {
  Table,
  Button
} from 'react-bootstrap'

class DetailTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.tableData
    }
  }

  componentDidMount = () => {
    this.setState({ data: this.props.tableData })

  }

  render() {
    const itemList = this.state.data.map((data, index) =>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.version}</td>
        <td>{data.created_at}</td>
        <td>
          <Button variant="link" href={data.android}>Download</Button>
        </td>
        <td>
          <Button
            variant="link"
            href={data.urlIos}
          >
            Download
          </Button>
        </td>
      </tr>
    )
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Version</th>
            <th>Date</th>
            <th>Android</th>
            <th>Ios</th>
          </tr>
        </thead>
        <tbody>
          {itemList}
        </tbody>
      </Table>
    )
  }

}

export default DetailTable