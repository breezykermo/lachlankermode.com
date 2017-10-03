import React, { PropTypes } from 'react'
import { Grid, Span } from 'react-responsive-grid'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
  },
  header: {
    margin: 0,
    textAlign: 'left',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    width: 300,
  },
  desc: {
    flex: 1,
    textAlign: 'left',
  },
  listing: {
    textAlign: 'right',
    margin: 0,
    marginLeft: 10,
    color: 'gray',
  },
}

const Listing = props => (
  <Grid columns={12} style={styles.container}>
    <Span columns={8} style={styles.body}>
      <a href={props.link}>
      <h1 className="site-header">{props.title}</h1>
      </a>
      <p style={styles.desc}>{props.desc}</p>
    </Span>
    <Span columns={4} style={styles.listContainer}>
      <ul style={styles.list}>
        {props.tech.map((item, key) => (
          <li key={key} style={styles.listing}>{item}</li>
        ))}
      </ul>
    </Span>
  </Grid>
)
Listing.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
}

export default Listing
