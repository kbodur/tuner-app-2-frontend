### Tuner-app-2 Front End
This is a React-based web application for managing playlists, albums, and songs. It allows users to create, view, edit, and delete playlists and albums, and manage songs within them.

### Table of Contents
Features
Installation
Usage
API
Project Structure
Contributing
License


### Features
Playlists Management: Create, view, edit, delete playlists, and mark them as favorites.
Albums Management: Create, view, edit, delete albums under specific playlists.
Songs Management: Create, view, edit, delete songs under specific albums.
Navigation: Navigate between playlists, albums, and songs.
API Integration: Communicates with a RESTful API for data persistence.


### Installation
Clone the repository:

git clone 
https://github.com/kbodur/tuner-app-2-frontend.git
cd tuner-app-2-frontend

## Install dependencies:
npm install

## Set up the environment variables:

Create a .env file in the root directory and set the following environment variables:

VITE_BASE_URL=http://localhost:4002


## Start the development server:
npm run dev

The app will be available at http://localhost:4002.

### Usage
Viewing Playlists: Go to the Playlists page to view all playlists.
Adding a Playlist: Click on the "New Playlist" button to add a new playlist.
Editing a Playlist: Click on a playlist name, then click "Edit" to modify it.
Deleting a Playlist: Click on a playlist name, then click "Delete" to remove it.
Managing Albums: Click on a playlist to view its albums, add new albums, or edit/delete existing ones.
Managing Songs: Within an album, view, add, edit, or delete songs.


### API
The application communicates with a backend API for CRUD operations. Below is a basic structure of the API endpoints used:

## Playlists
GET /playlists: Get all playlists.
POST /playlists: Create a new playlist.
GET /playlists/:id: Get a specific playlist.
PUT /playlists/:id: Update a specific playlist.
DELETE /playlists/:id: Delete a specific playlist.


## Albums
GET /playlists/:playlistId/albums: Get all albums in a playlist.
POST /playlists/:playlistId/albums: Create a new album in a playlist.
GET /playlists/:playlistId/albums/:id: Get a specific album.
PUT /playlists/:playlistId/albums/:id: Update a specific album.
DELETE /playlists/:playlistId/albums/:id: Delete a specific album.


## Songs
GET /playlists/:playlistId/albums/:albumId/songs: Get all songs in an album.
POST /playlists/:playlistId/albums/:albumId/songs: Create a new song in an album.
GET /playlists/:playlistId/albums/:albumId/songs/:id: Get a specific song.
PUT /playlists/:playlistId/albums/:albumId/songs/:id: Update a specific song.
DELETE /playlists/:playlistId/albums/:albumId/songs/:id: Delete a specific song.


### Project Structure

.
├── public
├── src
│   ├── components
│   │   ├── Album.jsx
│   │   ├── AlbumForm.jsx
│   │   ├── Albums.jsx
│   │   ├── NavBar.jsx
│   │   ├── Playlist.jsx
│   │   ├── PlaylistDetails.jsx
│   │   ├── PlaylistEditForm.jsx
│   │   ├── PlaylistNewForm.jsx
│   │   ├── Playlists.jsx
│   │   ├── Song.jsx
│   │   ├── SongForm.jsx
│   │   ├── Songs.jsx
│   ├── App.jsx
│   ├── index.jsx
├── .env
├── package.json
└── README.md
 
 
### Contributing
Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request for review.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
