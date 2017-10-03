import React from 'react'
// import { config } from 'config'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
// import { Grid, Breakpoint, Span } from 'react-responsive-grid'
import Card from './components/Card'
import Controls from './components/Controls'
import './Deutsch.scss'

class Deutsch extends React.Component {
  render () {
    return (
      <div className="deutsch-container">
        <div className="controls-container">
          <Controls />
        </div>
        <div className="card-container">
          <Card />
        </div>
      </div>
    )
  }
}

export default Deutsch
