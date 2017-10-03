import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import DocumentTitle from 'react-document-title'

import Bio from '../components/Bio'
import '../css/main.scss'


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <DocumentTitle title="field notes">
        <div>
          <ul style={{ marginLeft: 0 }}>
            {posts
              .filter(e => e.node.frontmatter.date)
              .map((edge, idx) => {
              const deets = edge.node.frontmatter
              return (
                <li
                  key={idx}
                  className="frag-container"
                >
                  <span className="frag-date">
                    {deets.date}
                  </span>
                  <Link
                    to={deets.path}
                    className="frag"
                  >{deets.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
