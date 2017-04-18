/* jshint esversion: 6 */
import React, {Component} from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    };
    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this);
  }

  handleSongSelect(id) {
    let newId = id;
    this.setState({ selectedSongId: newId });
  }

  handlePlaylistSelect(id) {
    let newId = id;
    this.setState({ selectedPlaylistId: newId });
    let firstSongId = this.props.data.playlists[id-1].songs[0];
    this.setState({ selectedSongId: firstSongId });
  }

  render() {
    let data = this.props.data;

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    };

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <h3 className="PlaylistCollection small-6 large-6 columns">
          <PlaylistCollection
            playlists={data.playlists}
            selectedPlaylistId={this.state.selectedPlaylistId}
            handlePlaylistSelect={this.handlePlaylistSelect}
          />
        </h3>
        <h5 className="SongCollection small-6 large-6 columns">
          <SongCollection
            songs={selectedPlaylistSongs}
            selectedSongId={this.state.selectedSongId}
            handleSongSelect={this.handleSongSelect}
          />
        </h5>
      </div>
    );
  }
}

export default App;
