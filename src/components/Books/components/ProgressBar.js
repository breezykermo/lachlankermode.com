import React, { PropTypes } from 'react'

const ProgressBar = ({ progress }) => (
  <div className="progress-bar meter purple nostripes">
    <span style={{ width: `${progress * 100} %` }} />
  </div>
)
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar
