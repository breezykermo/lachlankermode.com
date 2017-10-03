import React, { PropTypes } from 'react'
import Listing from './components/Listing'
import data from './portfolio-data.json'

const styles = {
  header: {
    textAlign: 'right',
    fontWeight: '100',
    marginTop: 0,
    marginBottom: 60,
  },
}

class Portfolio extends React.Component {
  static propTypes = {
    aProp: PropTypes.string,
  }

  render () {
    return (
      <div>
        <h1 style={styles.header}>portfolio</h1>
        {data.code.map(listingProps => <Listing {...listingProps} />)}
      </div>
    )
  }
}

export default Portfolio
