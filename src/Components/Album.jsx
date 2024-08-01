// Album.jsx
import React, { useState } from "react";
import AlbumForm from "./AlbumForm";
import { Link, useParams } from "react-router-dom";


function Album({ album, handleDelete, handleSubmit }) {
    const [albumForm, setAlbumForm] = useState(false);
    const { id } = useParams()

    const toggleView = () => {
        setAlbumForm(!albumForm);
    };
    return (
        <div className="Album">
            {albumForm ? (
                <AlbumForm
                    albumDetails={album}
                    toggleView={toggleView}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <div className="album">
                    <h3>Artist:<Link to={`/playlists/${id}/albums/${album.id}/songs`}>{album.artist}</Link></h3>
                    <p>Title:{album.title}</p>
                    <p>Release Date:{album.release_date}</p>
                </div>
            )}
            <div className="album-actions">
                <button onClick={toggleView}>
                    {albumForm ? "Cancel" : "Edit this album"}
                </button>
                <button onClick={() => handleDelete(album.id)}>Delete</button>
                <Link to={`/playlists`}> <button>Back</button></Link>
            </div>
        </div>
    );
}

export default Album;
