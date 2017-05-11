import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

const App = (props) => {
  return (
    <div className="text-center">
      <p>Hello Launcher!</p>
      <p>Remove the div displaying this text from your App.js file and uncomment the code we have provided to help get you started on your routes.</p>
    </div>
    //Uncomment this code
    // <Router history={browserHistory}>
      //Put routes here
    // </Router>
  );
}

export default App;
