import React from 'react'
import DocumentTitle from 'react-document-title'

export default class Talks extends React.Component {
  render () {
    return (
      <DocumentTitle title={'Talks | lachlankermode'}>
        <div>
          These are my talks
        </div>
      </DocumentTitle>
    )
  }
}
