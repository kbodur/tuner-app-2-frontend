import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function PlaylistNewForm() {
    const navigate = useNavigate();
    const [playlist, setPlaylist] = useState({
        name: "",
        description: "",
        is_favorite: false,
    });

    // Add a color. Redirect to the index view.
    const addPlaylist = () => {
        fetch(`${API}/playlists`, {
            method: "POST",
            body: JSON.stringify(playlist),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                navigate("/playlists")
            })
            .catch(err => console.log(err))
    };

    const handleTextChange = (event) => {
        setPlaylist({ ...playlist, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setPlaylist({ ...playlist, is_favorite: !playlist.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addPlaylist();
    };

    return (
        <div className="New-page">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    id="name"
                    value={playlist.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Playlist"
                    required
                /> <br />
                <label htmlFor="description">Description:</label> <br />
                <input
                    id="description"
                    value={playlist.description}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="description"
                    required
                /> <br />

                <label htmlFor="is_favorite">Favorite:</label> <br />
                <input
                    id="is-favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={playlist.is_favorite}
                /> <br />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/playlists`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );
}

export default PlaylistNewForm;
