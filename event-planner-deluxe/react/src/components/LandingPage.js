import React from 'react';

const LandingPage = props => {
  return (
    <div>
      <h1>{props.event.name}</h1>
      <h2>by {props.event.organizer}</h2>
      <h3>Date & Time</h3>
      <p>{props.event.date.toDateString()}</p>
      <p>{props.event.date.toTimeString()}</p>
      <h3>Location</h3>
      <p>{props.event.venue}</p>
      <p>{props.event.address}</p>
      <button onClick={props.registrationLink}>Register</button>
      <button onClick={props.registrantsLink}>See Who is Coming</button>
    </div>
  )
}

export default LandingPage;
