/* jshint esversion: 6 */
import React from 'react';

const Playlist = (props) => {
  let name = props.name;
  return(
    <li className={props.className} onClick={props.handlePlaylistSelect}>
      {name}
    </li>
  )
}

export default Playlist;
