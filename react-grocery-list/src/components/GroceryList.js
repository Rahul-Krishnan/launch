/* jshint esversion: 6 */
import React, {Component} from 'react';
import Grocery from './Grocery';

class GroceryList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let groceries = this.props.groceries.map((grocery) => {
      return (
        <Grocery
          key={grocery.id}
          groceryName={grocery.name}
          handleButtonClick={this.props.handleButtonClick}
        />
      )
    });
    
    return (
      <ul>
        {groceries}
      </ul>
    )
  }
}

export default GroceryList;
