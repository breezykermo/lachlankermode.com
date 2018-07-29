import React from 'react'
import Helmet from 'react-helmet'
import Books from '../components/Books'

export default class BooksContainer extends React.Component {
  render () {
    return (
      <div>
        <Helmet title="library | lachlankermode"/>
        <div>
          <Books />
        </div>
      </div>
    )
  }
}
