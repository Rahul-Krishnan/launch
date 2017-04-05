import React, { Component } from 'react';
import FormContainer from './FormContainer';
import MealsList from '../components/MealsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    }
    this.trackConsumption = this.trackConsumption.bind(this);
  }

  trackConsumption(submission) {
    this.setState({ meals: this.state.meals.concat(submission) })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Food Tracker</h1>
          <FormContainer trackConsumption={this.trackConsumption} />
          <MealsList meals={this.state.meals} />
        </div>
      </div>
    );
  }
}

export default App;
