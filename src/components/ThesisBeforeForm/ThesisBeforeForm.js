import React, { PropTypes } from 'react'
import './style.scss'
import 'sheetsu-web-client'

class ThesisBeforeForm extends React.Component {
  static propTypes = {
    aProp: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      facebook: '',
      encryption: '',
      thecloud: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, id) {
    const obj = {};
    obj[id] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('writing...')
    Sheetsu.write(
      // 'https://sheetsu.com/apis/v1.0/020b2c0f/',
      // "https://sheetsu.com/apis/v1.0/85174dad1d7c",
      'https://sheetsu.com/apis/v1.0su/a920fc5c3c48',
      {
        ...this.state,
        watched: false,
      },
      {},
      function(x) {
        console.log('Successfully sent.');
        console.log(x);
      });
    // Sheetsu.write("https://sheetsu.com/apis/v1.0su/85174dad1d7c", this.state, {})
    //   .then(x => {
    //     console.log(e);
    //     console.log('should have successfully submitted')
    //   }, e => alert(e));
  }

  render () {
    return (
      <div className="form-container">
        <h1>hello!</h1>
        <div className="form-intro">thank you for your interest! Once you submit the form below, you will be shown a video that 
        proposes to explain the Internet through an 'animated docuemntary' of its computational processes 
        and infrastructures. <b>Please don't use any external resources to answer the questions, just plug 
        and play!</b> Write as much as you need to answer the question sufficiently. No grades! 
        I would greatly appreciate if, after watching the film, you would be kind 
        enough to answer the couple of questions that follow.</div>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-question">
            <label>
              <div>When I log in to Facebook, what happens to take me to my home page?</div>
              <textarea type="text" name="name" value={this.state.facebook} onChange={e => this.handleChange(e, 'facebook')} />
            </label>
          </div>
          <div className="form-question">
            <label>
              <div>What is encryption?</div>
              <textarea type="text" name="name" value={this.state.encryption} onChange={e => this.handleChange(e, 'encryption')} />
            </label>
          </div>
          <div className="form-question">
            <label>
              <div>When we talk storing something on 'the cloud,' what do we mean? Where is our data stored?</div>
              <textarea type="text" name="name" value={this.state.thecloud} onChange={e => this.handleChange(e, 'thecloud')} />
            </label>
          </div>
          <div className="form-submit">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ThesisBeforeForm
