import React from 'react'
import DocumentTitle from 'react-document-title'
import Resume from '../components/Resume'

export default class ResumeContainer extends React.Component {
  render () {
    return (
      <DocumentTitle title={'Resume | lachlankermode'}>
        <div>
          <Resume />
        </div>
      </DocumentTitle>
    )
  }
}
