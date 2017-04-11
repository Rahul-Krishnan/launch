/* jshint esversion: 6 */
import React, {Component} from 'react';

class MessageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      sender: 'Flavor Flav'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    this.setState({ clickCount: newClickCount });
  }

  render() {
    return(
      <div onClick = {this.handleClick}>
        <h1>Component Message: {this.props.message}</h1>
        <h1>Component Click Count: {this.state.clickCount}</h1>
        <h1>Component Sender: {this.state.sender}</h1>
      </div>
    );
  }
};

export default MessageComponent;
