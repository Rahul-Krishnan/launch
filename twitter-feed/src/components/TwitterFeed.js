/* jshint esversion: 6 */
import React, {Component} from 'react';
import Tweet from './Tweet';

class TwitterFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleReplyClick = this.handleReplyClick.bind(this);
    this.handleRetweetClick = this.handleRetweetClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  handleReplyClick(event) {
    event.preventDefault();
    alert("Reply!");
  }

  handleRetweetClick(event) {
    event.preventDefault();
    alert("Retweet!");
  }

  handleLikeClick(event) {
    event.preventDefault();
    alert("Like!");
  }

  handleFavoriteClick(event) {
    event.preventDefault();
    alert("Favorite!");
  }

  render() {
    let tweets = this.props.data.map((tweet) =>
    {
      const { id_str, text, user, retweet_count, favorite_count, entities, favorited, retweeted, timestamp_ms } = tweet;

      return (
        <Tweet
          key={id_str}
          text={text}
          user={user}
          retweet_count={retweet_count}
          favorite_count={favorite_count}
          entities={entities}
          favorited={favorited}
          retweeted={retweeted}
          timestamp_ms={timestamp_ms}
          handleReplyClick={this.handleReplyClick}
          handleRetweetClick={this.handleRetweetClick}
          handleLikeClick={this.handleLikeClick}
          handleFavoriteClick={this.handleFavoriteClick}
        />
      )
    });

    return(
      <ul className="twitter-feed-container">
        {tweets}
      </ul>
    )
  }
}

export default TwitterFeed;
