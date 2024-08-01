import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Album from "./Album";
import AlbumForm from "./AlbumForm";

const API = import.meta.env.VITE_BASE_URL;

function Albums() {
    const [albums, setAlbums] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/playlists/${id}/albums`)
            .then(response => response.json())
            .then(responseJSON => {
                console.log('API Response:', responseJSON);
                if (Array.isArray(responseJSON)) {
                    setAlbums(responseJSON);
                } else {
                    console.error('Expected an array of albums under "data"');
                }
            })
            .catch(error => console.error('Error fetching albums:', error));
    }, [id, API]);


    const handleAdd = (newAlbum) => {
        fetch(`${API}/playlists/${id}/albums`, {
            method: "POST",
            body: JSON.stringify(newAlbum),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                setAlbums([responseJSON, ...albums]);
            })
            .catch((error) => console.error("Error adding album:", error));
    };

    const handleEdit = (updatedAlbum) => {
        fetch(`${API}/playlists/${id}/albums/${updatedAlbum.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedAlbum),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                const copyAlbumArray = [...albums];
                const indexUpdatedAlbum = copyAlbumArray.findIndex((album) => {
                    return album.id === updatedAlbum.id
                });
                copyAlbumArray[indexUpdatedAlbum] = responseJSON;
                setAlbums(copyAlbumArray);
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = (albumId) => {
        fetch(`${API}/playlists/${id}/albums/${albumId}`, {
            method: "DELETE",
        })
            .then(() => {
                const updatedAlbums = albums.filter(album => album.id !== albumId);
                setAlbums(updatedAlbums);
            })
            .catch(error => console.error('Error deleting album:', error));
    };

    const handleToggleFavorite = (updatedAlbum) => {
        setAlbums(prevAlbums =>
            prevAlbums.map(album =>
                album.id === updatedAlbum.id ? updatedAlbum : album
            )
        );
    };


    return (
        <section className="Albums">
            <h2>Albums</h2>
            <AlbumForm handleSubmit={handleAdd}>
                <h3>Add a New Album</h3>
            </AlbumForm>
            <div className="Albums">
                {Array.isArray(albums) && albums.length > 0 ? (
                    albums.map(album => (
                        <Album key={album.id} album={album} onToggleFavorite={handleToggleFavorite} />
                    ))
                ) : (
                    <p>No albums available</p>
                )}
            </div>
        </section>
    );

}

export default Albums;
