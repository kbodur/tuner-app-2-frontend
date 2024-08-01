import { Link } from "react-router-dom";

function Playlist({ playlist, onToggleFavorite }) {

    const handleFavoriteClick = () => {
        fetch(`${API}/playlists/${playlist.id}`, {
            method: "PUT",
            body: JSON.stringify({ ...playlist, is_favorite: !playlist.is_favorite }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(updatedPlaylist => {
                onToggleFavorite(updatedPlaylist);
            })
            .catch(err => console.log(err));
    };



    return (

        <tr>
            <td> <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></td>
            <td> {playlist.description}</td>
            <td onClick={handleFavoriteClick}>{playlist.is_favorite ? "🎶 " : " "}</td>
        </tr>
    );
}

export default Playlist;
