import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/playlists">Playlists</Link>
            </h1>
            <button>
                <Link to="/playlists/new">New playlists</Link>
            </button>
        </nav>
    );
}
