import React from 'react'
// import { config } from 'config'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
// import { Grid, Breakpoint, Span } from 'react-responsive-grid'
// import { Grid } from 'react-responsive-grid'
import './Card.scss'

class Card extends React.Component {
  state = {
    flipped: false,
  };

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped,
    })
  }

  render () {
    return (
      <div
        className="deutsch-card"
        onClick={this.flipCard}
      >
        <div className={`flipper ${this.state.flipped && 'flipped'}`}>
          <div className="card-front">
            die Arbeit
          </div>
          <div className="card-back">
            the work
          </div>
        </div>
      </div>
    )
  }
}

export default Card
