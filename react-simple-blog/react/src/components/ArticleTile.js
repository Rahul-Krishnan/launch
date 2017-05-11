import React from 'react';
import { Link } from 'react-router';

const ArticleTile = (props) => {
  return(
    <div className="article-tile">
      <p>{props.title}</p>
      <hr/>
    </div>
  )
}

export default ArticleTile;
