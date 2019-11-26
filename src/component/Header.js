import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <div style={styles.root}>
        <a href='/'>
          <p style={styles.title}>TDC Mobile Build</p>
        </a>
      </div>
    )
  }
}

export default Header

const styles = {
  root: {
    width: '100%',
    borderBottom: '0.5px solid #eff0ff',
    marginTop: '10px'
  },
  title: {
    color: '#f07933',
    fontSize: '2rem'
  }
}