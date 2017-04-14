/* jshint esversion: 6 */
import React, {Component} from 'react';
import QuestionList from './QuestionList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    let _ = this;
    let data = "";
    fetch(' http://localhost:3000/api/v1/questions', {
     credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      data = body;
      _.setState({data: data});
    });
    return _;
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return(
      <div className="container">
        <div className="title">{"We're here to help"}</div>
        <QuestionList
          data={this.state.data} />
      </div>
    )
  }
}

export default App;
