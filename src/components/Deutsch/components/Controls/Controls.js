import React, { PropTypes } from 'react'
import './Controls.scss'

const Controls = ({ className }) => (
  <div className={`${className || ''} controls-inner-container`} >
    <text className="controls-button">Deutsch-English</text>
    <text className="controls-button">English-Deutsch</text>
  </div>
)
Controls.propTypes = {
  className: PropTypes.string,
}

export default Controls
