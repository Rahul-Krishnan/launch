import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    }
  }

  render() {
    return(
      <form className="new-article-form callout">
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
        />

        <div className="button-group">
          <button className="button">Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
