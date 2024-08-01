import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Albums from "./Albums"

const API = import.meta.env.VITE_BASE_URL;

function PlaylistDetails() {
    const [playlist, setPlaylist] = useState({ name: "" });

    let navigate = useNavigate();
    let { id } = useParams();

    // On page load, load color details
    useEffect(() => {
        fetch(`${API}/playlists/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPlaylist(res)
            })
            .catch(err => console.log(err))
    }, [])
    // Be able to delete a color. Return to index view.
    const handleDelete = () => {
        fetch(`${API}/playlists/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(res => {
                navigate("/playlists")
            })
            .catch(err => console.log(err))
    };

    return (
        <article className="show-page">
            <p>Name: {playlist.name}</p>
            <p>Description: {playlist.description}</p>
            <p>Favorite: {playlist.is_favorite ? <span>🎶 </span> : null}</p>


            <div className="showNavigation">
                <div>

                    <Link to={`/playlists`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>

                    <Link to={`/playlists/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>

                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <Albums />
        </article>
    );
}

export default PlaylistDetails;
