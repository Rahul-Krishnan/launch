import React from 'react';
import Review from './Review';

const RestaurantShow = ({ id, name, reviews }) => {
  let restaurantReviews = reviews.map(review => {
    return(
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
    )
  })

  return(
    <div className="restaurant">
      <h2>{name}</h2>
      <div>
        {restaurantReviews}
      </div>
    </div>
  )
}

export default RestaurantShow;
