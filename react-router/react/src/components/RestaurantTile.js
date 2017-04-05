import React from 'react';
import Review from './Review';
import { Link } from 'react-router';

const RestaurantTile = ({ id, name, address, hours_of_operation }) => {
    return(
      <div className="restaurant">
        <h1>{name}</h1>
        <h3>Address: {address} </h3>
        <h3>Hours of Operation: {hours_of_operation} </h3>
      </div>
    )
  }

export default RestaurantTile;
