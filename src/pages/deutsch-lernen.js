import React from 'react'
import DocumentTitle from 'react-document-title'
import Deutsch from '../components/Deutsch'

export default class DeutschContainer extends React.Component {
  render () {
    return (
      <DocumentTitle title={'Deutsch | lachlankermode'}>
        <div>
          <Deutsch />
        </div>
      </DocumentTitle>
    )
  }
}
