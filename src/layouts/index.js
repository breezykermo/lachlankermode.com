import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Bio from '../components/Bio'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Lachlan Kermode"
      meta={[
        { name: 'description', content: 'Software developer, funky chap from New Zealand' },
        { name: 'keywords', content: 'software, react, new zealand' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
      <Bio />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
