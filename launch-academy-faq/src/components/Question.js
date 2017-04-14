/* jshint esversion: 6 */
import React, {Component} from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "hidden",
      icon: "plus"
    };

    this.handlePlusClick = this.handlePlusClick.bind(this);
  }

  handlePlusClick(event) {
    if (this.state.selected==="hidden") {
      this.setState({selected: "visible", icon: "minus"});
    } else {
      this.setState({selected: "hidden", icon: "plus"});
    }
  }

  render() {
    return(
      <div className="question-box">
        <i onClick={this.handlePlusClick} className={`fa fa-${this.state.icon}-square fa-lg`} aria-hidden="true"></i>
        <div className="question">
          {this.props.question}
        </div>
        <div className={`answer ${this.state.selected}`}>
          {this.props.answer}
        </div>
      </div>
    )
  }
}

export default Question;
