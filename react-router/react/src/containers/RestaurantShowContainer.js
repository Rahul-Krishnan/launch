import React, { Component }  from 'react';
import RestaurantShow from '../components/RestaurantShow';

class RestaurantShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      reviews: []
    }
  }

  componentDidMount() {
    let restaurantId = this.props.params.id;
    fetch(`/api/v1/restaurants/${restaurantId}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({restaurant: responseData.restaurant, reviews: responseData.reviews})
      })
  }
  render() {
    return(
      <div className="restaurants">
        <h3>More Info About Your Selected Restaurant</h3>
        <RestaurantShow
          key={this.state.restaurant.id}
          id={this.state.restaurant.id}
          name={this.state.restaurant.name}
          address={this.state.restaurant.address}
          reviews={this.state.reviews}
        />
      </div>
    )
  }
}

export default RestaurantShowContainer;
