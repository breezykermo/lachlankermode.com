import React from 'react'
import DocumentTitle from 'react-document-title'
import Portfolio from '../components/Portfolio'

export default class PortfolioContainer extends React.Component {
  render () {
    return (
      <DocumentTitle title="Portfolio | lachlankermode">
        <div>
          <Portfolio />
        </div>
      </DocumentTitle>
    )
  }
}
