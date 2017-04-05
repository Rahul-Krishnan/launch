import React, { Component }  from 'react';
import RestaurantTile from '../components/RestaurantTile';

class RestaurantsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/restaurants.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({restaurants: responseData})
      })
  }

  render() {
    let restaurants = this.state.restaurants.map(restaurant => {
      return(
        <RestaurantTile
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          address={restaurant.address}
          hours_of_operation={restaurant.hours_of_operation}
        />
      )
    })
    return(
      <div className="restaurants">
        <h2> List of Reviewed Restaurants </h2>
        {restaurants}
        {this.props.children}
      </div>
    )
  }
}

export default RestaurantsIndexContainer;
