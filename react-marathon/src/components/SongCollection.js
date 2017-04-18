/* jshint esversion: 6 */
import React from 'react';
import Song from './Song';

const SongCollection = (props) => {
  let songs = props.songs.map((song) => {
    const { id, name, artist, album } = song;
    let className;
    let handleSongSelect = () => props.handleSongSelect(id);

    if (id===props.selectedSongId) {
      className = "selected";
    }

    return (
      <Song
        key={id}
        name={name}
        artist={artist}
        album={album}
        className={className}
        handleSongSelect={handleSongSelect}
      />
    )
  })

  return(
    <ul className="SongList small-12 large-12 columns">
      {songs}
    </ul>
  )
}

export default SongCollection
