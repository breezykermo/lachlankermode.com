import React from 'react'
import Link from 'gatsby-link'
import { Grid, Breakpoint, Span } from 'react-responsive-grid'
import './Header.scss'

const authorName = 'Lachlan Kermode'
class Header extends React.Component {
  render () {
    return (
      <Grid columns={12}>
        <Breakpoint minWidth={1200} className="container">
          <Span columns={5}>
            <Link to={'/'}>
              <h1 className="site-header">{authorName}</h1>
            </Link>
          </Span>
          <Span columns={7} className="right-container">
            <div className="subpages">
              <Link to={'/about/'}>
                <div className="page-link">about</div>
              </Link>
              {/* <Link to={'/portfolio/'}>
                <div className="page-link">portfolio</div>
              </Link>
              <Link to={'/music/'}>
                <div className="page-link">music</div>
              </Link> */}
              <Link to={'/books/'}>
                <div className="page-link">books</div>
              </Link>
            </div>
          </Span>
        </Breakpoint>
        <Breakpoint maxWidth={1200} minWidth={670} className="pad-container">
          <Span columns={7}>
            <Link to={'/'}>
              <h1 className="pad-site-header">{authorName}</h1>
            </Link>
          </Span>
          <Span columns={5}>
            <div className="pad-subpages">
              <Link to={'/about/'}>
                <div className="pad-page-link">about</div>
              </Link>
              {/* <Link to={'/portfolio/'}>
                <div className="pad-page-link">portfolio</div>
              </Link>
              <Link to={'/music/'}>
                <div className="pad-page-link">music</div>
              </Link> */}
              <Link to={'/books/'}>
                <div className="pad-page-link">books</div>
              </Link>
            </div>
          </Span>
        </Breakpoint>
        <Breakpoint maxWidth={670} className="mobile-container">
          <Span columns={12}>
            <Link to={'/'}>
              <h1 className="mobile-site-header">{authorName}</h1>
            </Link>
            <div className="mobile-subpages">
              <Link to={'/about/'}>
                <div className="mobile-page-link">abt</div>
              </Link>
              {/* <Link to={'/portfolio/'}>
                <div className="mobile-page-link">code</div>
              </Link>
              <Link to={'/music/'}>
                <div className="mobile-page-link">music</div>
              </Link> */}
              <Link to={'/books/'}>
                <div className="mobile-page-link">lib</div>
              </Link>
            </div>
          </Span>
        </Breakpoint>
      </Grid>
    )
  }
}

export default Header
