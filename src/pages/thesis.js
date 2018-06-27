import React from 'react'
import DocumentTitle from 'react-document-title'
import ThesisBeforeForm from '../components/ThesisBeforeForm'

export default class DeutschContainer extends React.Component {
  render () {
    return (
      <DocumentTitle title={'thesis | lachlankermode'}>
        <ThesisBeforeForm />
      </DocumentTitle>
    )
  }
}
