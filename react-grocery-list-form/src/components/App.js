/* jshint esversion: 6 */
import React from 'react'
import GroceryForm from './GroceryForm'
import GroceryList from './GroceryList'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let groceryData = [
      { id: 1, name: "Oranges" },
      { id: 2, name: "Bananas" },
      { id: 3, name: "Bread" }
    ]
    return(
      <div>
        <h1>Grocery List React</h1>
        <form onSubmit={ (event) => { event.preventDefault(); alert('Form was submitted') } }>
          <input type="text" placeholder="name of grocery" />
          <input type="submit" value="Add To List" />
        </form>

        <GroceryList groceries={groceryData} handleButtonClick={ (event) => { alert('Button was clicked')} }/>
      </div>
    )
  }
}

export default App
