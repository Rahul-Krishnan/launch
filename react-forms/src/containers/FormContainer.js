/* jshint esversion: 6 */
import React, { Component } from 'react';
import Select from '../components/Select';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      foodItemConsumed: '',
      mealOptions: ['breakfast', 'lunch', 'dinner', 'snack'],
      mealSelected: ''
    };
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleConsumedChange = this.handleConsumedChange.bind(this);
    this.handleMealSelection = this.handleMealSelection.bind(this);
    this.validateConsumedChange = this.validateConsumedChange.bind(this);
    this.validateMealSelection = this.validateMealSelection.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      foodItemConsumed: '',
      mealSelected: ''
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (
      this.validateConsumedChange(this.state.foodItemConsumed) &&
      this.validateMealSelection(this.state.mealSelected)
    ) {
      let formPayload = {
        food: this.state.foodItemConsumed,
        meal: this.state.mealSelected
      };
      this.props.trackConsumption(formPayload);
      this.handleClearForm(event);
    }
  }

  handleConsumedChange(event) {
    this.validateConsumedChange(event.target.value);
    this.setState({ foodItemConsumed: event.target.value });
  }

  handleMealSelection(event) {
    this.validateMealSelection(event.target.value);
    this.setState({ mealSelected: event.target.value });
  }

  validateConsumedChange(consumed) {
    if (consumed === '' || consumed === ' ') {
      let newError = { foodItemConsumed: 'Food item consumed may not be blank.' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.foodItemConsumed;
      this.setState({ errors: errorState });
      return true;
    }
  }

  validateMealSelection(selection) {
    if (selection === '') {
      let newError = { mealSelected: 'You must select a meal.' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.mealSelected;
      this.setState({ errors: errorState });
      return true;
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <TextField
          content={this.state.foodItemConsumed}
          label='Food Item Consumed'
          name='consumed'
          handlerFunction={this.handleConsumedChange}
        />
        <Select
          handlerFunction={this.handleMealSelection}
          name='meal'
          label='Meal'
          options={this.state.mealOptions}
          selectedOption={this.state.mealSelected}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default FormContainer;
