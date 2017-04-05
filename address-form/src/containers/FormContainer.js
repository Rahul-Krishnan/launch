import React, { Component } from 'react'

class FormContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="firstName" />
        </div>

        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="lastName" />
        </div>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" />

        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" />
        </div>

        <div>
          <label htmlFor="zip-code">Zip Code:</label>
          <input type="text" id="zip-code" name="zipCode" />
        </div>

        <div>
          <label htmlFor="phone-number">Phone Number:</label>
          <input type="text" id="phone-number" name="phoneNumber" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>

        <input type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer
