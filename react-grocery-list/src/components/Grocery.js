/* jshint esversion: 6 */
import React, {Component} from 'react';

class Grocery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <li>
        {this.props.groceryName}
        <button type="button" onClick={this.props.handleButtonClick}>Delete</button>
      </li>
    )
  }
}

export default Grocery;
