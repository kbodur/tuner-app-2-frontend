
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Song from "./Song";
import SongForm from "./SongForm";


const API = import.meta.env.VITE_BASE_URL;

function Songs() {
    const [songs, setSongs] = useState([]);
    let { id, album_id } = useParams();

    useEffect(() => {
        fetch(`${API}/playlists/${id}/albums/${album_id}/songs`)
            .then((response) => response.json())
            .then((response) => {

                setSongs(response.songs);
            });
    }, [id, API]);

    const handleAdd = (newSong) => {
        fetch(`${API}/playlists/${id}/albums/${album_id}/songs`, {
            method: "POST",
            body: JSON.stringify(newSong),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())

            .then((responseJSON) => {
                setSongs([responseJSON, ...songs]);
            })
            .catch((error) => console.error("catch", error));
    };


    const handleEdit = (updatedSong) => {
        fetch(`${API}/playlists/${id}/albums/${album_id}/songs/${updatedSong.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedSong),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                const copySongArray = [...songs];
                const indexUpdatedSong = copySongArray.findIndex((song) => {
                    return song.id === updatedSong.id;
                });
                copySongArray[indexUpdatedSong] = responseJSON;
                setSongs(copySongArray);
            })
            .catch((error) => console.error(error));
    };




    const handleDelete = (id) => {
        fetch(`${API}/playlists/${id}/albums/${album_id}/songs`, {
            method: "DELETE",
        })
            .then(
                (response) => {
                    const copySongArray = [...songs];
                    const indexDeletedSong = copySongArray.findIndex((song) => {
                        return song.id === id;
                    });
                    copySongArray.splice(indexDeletedSong, 1);
                    setSongs(copySongArray);
                },
                (error) => console.error(error)
            )
            .catch((error) => console.warn("catch", error));
    };



    return (
        <section className="Songs">
            <h2>Songs</h2>
            <SongForm handleSubmit={handleAdd}>
                <h3>Add a New Song</h3>
            </SongForm>
            {songs.map((song) => (
                <Song key={song.id} song={song} handleDelete={handleDelete} handleSubmit={handleEdit} />
            ))}
        </section>
    );
}

export default Songs;