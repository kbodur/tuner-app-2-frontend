import { useState, useEffect } from "react";
import Playlist from "./Playlist";


const API = import.meta.env.VITE_BASE_URL;

function Playlists() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetch(`${API}/playlists`)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                setPlaylists(responseJSON);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleToggleFavorite = (updatedPlaylist) => {
        setPlaylists(prevPlaylists =>
            prevPlaylists.map(playlist =>
                playlist.id === updatedPlaylist.id ? updatedPlaylist : playlist
            )
        );
    };

    return (

        <div className="Colors">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Description</th>
                            <th>Favorite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playlists.map((playlist) => {
                            return <Playlist key={playlist.id} playlist={playlist} onToggleFavorite={handleToggleFavorite} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Playlists;
