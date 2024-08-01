import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;
console.log(API)

function PlaylistEditForm() {
    let { id } = useParams();
    const navigate = useNavigate();

    const [playlist, setPlaylist] = useState({
        name: "",
        description: "",
        is_favorite: false,
    });

    const handleTextChange = (event) => {
        setPlaylist({ ...playlist, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setPlaylist({ ...playlist, is_favorite: !playlist.is_favorite });
    };


    const updatePlaylist = () => {
        fetch(`${API}/playlists/${id}`, {
            method: "PUT",
            body: JSON.stringify(playlist),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                navigate(`/playlists/${id}`)
            })
            .catch(err => console.log(err))
    };

    // On page load, fill in the form with the color data.
    useEffect(() => {
        fetch(`${API}/playlists/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPlaylist(res)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePlaylist();
    };

    return (
        <div className="Edit-page">
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
            <Link to={`/playlists/${id}`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );
}

export default PlaylistEditForm;
