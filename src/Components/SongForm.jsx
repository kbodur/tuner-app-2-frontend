import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongForm({ songDetails, handleSubmit, toggleView, children }) {
    let { id } = useParams();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
        album_id: id

    });

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = (event) => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    useEffect(() => {
        if (songDetails) {
            setSong(songDetails);
        }
    }, [id, songDetails]);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(song, id);
        if (songDetails) {
            toggleView();
        }
        setSong({
            name: "",
            artist: "",
            album: "",
            time: "",
            is_favorite: false,
            album_id: id,
        });
        console.log("what is going on");
    };

    return (
        <div className="SongForm">
            {children}
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Song"
                    required
                /> <br />
                <label htmlFor="artist">Artist:</label> <br />
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="artist"
                    required
                /> <br />
                <label htmlFor="album">Album:</label> <br />
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album"
                    required
                /> <br />
                <label htmlFor="time">Time:</label> <br />
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="time"
                    required
                /> <br />
                <label htmlFor="is_favorite">Favorite:</label> <br />
                <input
                    id="is-favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.is_favorite}
                /> <br />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SongForm;
