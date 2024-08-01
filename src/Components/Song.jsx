
import { useState } from "react";
import SongForm from "./SongForm";
import { Link, useParams } from "react-router-dom";
function Song({ song, handleDelete, handleSubmit }) {
    const [songForm, setSongForm] = useState(false);
    const { id } = useParams()
    const toggleView = () => {
        setSongForm(!songForm);
    };
    return (
        <div className="song">
            {songForm ? (
                <SongForm
                    songDetails={song}
                    toggleView={toggleView}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <div className="Song" onClick={handleSubmit}>
                    <h4>Name:{song.name}</h4>
                    <p>Artist: {song.artist}</p>
                    <p>Album: {song.album}</p>
                    <p>Time: {song.time}</p>
                    <p>Favorite: {song.is_favorite ? "🎶" : " "}</p>
                </div>
            )}
            <div className="song-actions">
                <button onClick={toggleView}>
                    {songForm ? "Cancel" : "Edit this song"}
                </button>
                <button onClick={() => handleDelete(song.id)}>delete</button>
                <Link to={`/playlists/${id}`}> <button>Back</button></Link>
            </div>
        </div>
    );
}

export default Song;

