import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumForm({ albumDetails, handleSubmit, toggleView, children }) {
    let { id } = useParams();

    const [album, setAlbum] = useState({
        title: "",
        artist: "",
        release_date: "",
        playlist_id: id,
    });

    const handleTextChange = (event) => {
        setAlbum({ ...album, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        if (albumDetails) {
            setAlbum(albumDetails);
        }
    }, [id, albumDetails]);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(album, id);
        if (albumDetails) {
            toggleView();
        }
        setAlbum({
            title: "",
            artist: "",
            release_date: "",
            playlist_id: id,
        });
        console.log("what is going on");
    };

    return (
        <div className="Edit">
            {children}
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    required
                    value={album.title}
                    onChange={handleTextChange}
                /> <br />
                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    type="text"
                    name="artist"
                    value={album.artist}
                    onChange={handleTextChange}
                /> <br />
                <label htmlFor="release_date">Release Date:</label>
                <textarea
                    id="release_date"
                    type="text"
                    name="release_date"
                    value={album.release_date}
                    onChange={handleTextChange}
                />

                <br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default AlbumForm