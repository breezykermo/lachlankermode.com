import React from 'react'
import Helmet from 'react-helmet'
import '../css/main.scss'

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="markdown">
      <Helmet title={`field notes - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1 style={{ marginTop: 0, textAlign: 'right', fontWeight: 200, lineHeight: '2rem' }}>
          {post.frontmatter.title} <br style={{ margin: 0, padding: 0, boxSizing: 'none' }} />
          <span className="frag-date" style={{ textAlign: 'right' }}>
          {post.frontmatter.date}
          </span>
        </h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;