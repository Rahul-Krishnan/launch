/* jshint esversion: 6 */
import React, {Component} from 'react';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let tweet = this.props;
    let media;
    let newText;
    let liked="";
    let retweeted="";
    let newTimestamp = new Date();
    newTimestamp.setTime(tweet.timestamp_ms);
    let month = newTimestamp.getMonth();
    let date = newTimestamp.getDate();

    if (month === 1) {
      month = "Jan";
    } else if (month === 2) {
      month = "Feb";
    } else if (month === 3) {
      month = "Mar";
    } else if (month === 4) {
      month = "Apr";
    } else if (month === 5) {
      month = "May";
    } else if (month === 6) {
      month = "Jun";
    } else if (month === 7) {
      month = "Jul";
    } else if (month === 8) {
      month = "Aug";
    } else if (month === 9) {
      month = "Sep";
    } else if (month === 10) {
      month = "Oct";
    } else if (month === 11) {
      month = "Nov";
    } else {
      month = "Dec";
    }

    if (tweet.entities.media) {
      media = tweet.entities.media[0].media_url;
      let url = tweet.entities.media[0].display_url;
      newText = tweet.text.replace(url, "");
    } else {
      media = "";
      newText = tweet.text;
    }

    if (tweet.favorited) {
      liked = "liked";
    }

    if (tweet.retweeted) {
      retweeted = "retweeted";
    }

    return(
      <div className="tweet-container">
        <div className="profile small-2 large-2 columns">
          <img className="profile-image" src={tweet.user.profile_image_url}/>
        </div>
        <div className="non-profile small-10 large-10 columns">
          <div className="username">{tweet.user.name}</div>
          <div className="screen-name">@{tweet.user.screen_name}</div>
          <div className="date"> .  {month} {date}</div>
          <div className="tweet-text">{newText}</div>
          <img className="attached-media" src={media}/>
          <div className="icon" onClick={this.props.handleReplyClick}>
            <i className="fa fa-reply" aria-hidden="true"></i>
          </div>
          <div onClick={this.props.handleRetweetClick} className={"icon"+" "+retweeted}>
            <i className="fa fa-retweet" aria-hidden="true"></i>
            {tweet.retweet_count}
          </div>
          <div className={"icon"+" "+liked} onClick={this.props.handleLikeClick} >
            <i className="fa fa-heart" aria-hidden="true"></i>
            {tweet.favorite_count}
          </div>
          <div className="icon" onClick={this.props.handleFavoriteClick}>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet;
