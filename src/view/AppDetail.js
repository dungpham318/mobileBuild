import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Image
} from 'react-bootstrap'
import Header from '../component/Header'
import DetailTable from '../component/DetailTable'
import config from '../config'

class AppDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isFetching: false
    }
  }

  componentDidMount = async () => {
    this.setState({ isFetching: true })
    await this.getTableData()
  }

  getTableData = async () => {
    await fetch(`http://${config.IPLOCAL}:5003/api/getBuildList?applicationId=${this.props.application._id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.data.forEach(data => {
          this.setState({
            data: [
              ...this.state.data,
              {
                _id: data._id,
                version: data.version,
                ios: data.ios,
                android: data.android,
                created_at: data.created_at,
                urlIos: `itms-services://?action=download-manifest&url=${data.ios}`
              }
            ]
          })
        })

      })
      .then(() => {
        this.setState({ isFetching: false })

      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active href="/eLearning">
                <Image
                  src='https://www.dropbox.com/s/uuj0kgd06vezgvz/eLeaning_white_ios.png?dl=1'
                  style={{ width: '20px', marginRight: '5px' }}
                  rounded />
                eLearning
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        {
          this.state.isFetching === false &&
          <Row>
            <Col g={12} md={12} xs={12}>
              <DetailTable tableData={this.state.data} />
            </Col>
          </Row>
        }

      </Container>
    )
  }

}

export default AppDetail