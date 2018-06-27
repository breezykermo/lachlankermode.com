import React from 'react'
import Link from 'gatsby-link'
import profilePic from './profile-pic.png'

class Bio extends React.Component {
  render () {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          src={`${profilePic}`}
          alt={`author ${'Lachlan Kermode'}`}
          style={{
            width: 180,
            height: 180,
            padding: 40,
            float: 'left',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            // maxHi: 300,
          }}
        >
          <p>Written by <Link to={'/about/'} className="link">{'Lachlan Kermode'}</Link> who lives and works in Princeton.<br/><a href="https://keybase.io/lachlankermode">Keybase</a>: <a href="https://github.com/breezykermo">GitHub</a>: <a href="https://twitter.com/lachlankermode" className="link">Twitter</a>.</p>
        </div>
      </div>
    )
  }
}

export default Bio
