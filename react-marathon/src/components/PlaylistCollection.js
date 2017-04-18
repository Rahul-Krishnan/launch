/* jshint esversion: 6 */
import React from 'react';
import Playlist from './Playlist';

const PlaylistCollection = (props) => {
  let playlists = props.playlists.map((playlist) => {
    const { id, name, songs } = playlist;
    let className;
    let handlePlaylistSelect = () => props.handlePlaylistSelect(id);

    if (id===props.selectedPlaylistId) {
      className = "selected";
    }

    return (
      <Playlist
        key={id}
        name={name}
        songs={songs}
        className={className}
        handlePlaylistSelect={handlePlaylistSelect}
      />
    )
  });
  return(
    <ul>
      {playlists}
    </ul>
  )
}

export default PlaylistCollection;
