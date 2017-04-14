/* jshint esversion: 6 */
import React, {Component} from 'react';
import Question from './Question';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let questionList;
    if (this.props.data === "") {
      questionList = [];
    } else {
      questionList = this.props.data.map(section => {
        return(
            <Question
              question = {section.question}
              answer = {section.answer} />
        )
      })
    }
    return(
      <div>
        {questionList}
      </div>
    )
  }
}

export default QuestionList;
