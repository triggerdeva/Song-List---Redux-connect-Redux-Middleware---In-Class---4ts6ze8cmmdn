import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

function SongList(props) {
    const { songs, selectSong } = props;

    const handleSongSelect = (song) => {
        selectSong(song);
    };

    return (
        <div>
            {songs.map((song) => (
                <div className="song" key={song.title}>
                    <div>{song.title}</div>
                    <div>
                        <button onClick={() => handleSongSelect(song)}>
                            Select
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
