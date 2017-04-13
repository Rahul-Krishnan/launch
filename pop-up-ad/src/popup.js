/* jshint esversion: 6 */
import React, {Component} from 'react';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Your email here',
                  count: 0
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Submission complete: ' + this.state.value);
    console.log("Form submitted!");
    event.preventDefault();
  }

  handleClick() {
    event.preventDefault();
    if (this.state.count < 2) {
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
    } else {
      confirm('Are you sure you want to leave?');
      let newCount = 0;
      this.setState({count: newCount});
    }
  }

  render() {
    return(
      <div className="popup-frame">
        <i onClick={this.handleClick} className="fa fa-times fa-2x top-right" aria-hidden="true"></i>
        <h2>You have won tickets to see {this.props.artist}!!</h2>
        <h5>Please enter your email so we can send you tickets!</h5>
        <form onSubmit={this.handleSubmit}>
          <input type="email" id="email" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="CLAIM YOUR PRIZE" />
        </form>
      </div>
    );
  }
};

export default Popup;
