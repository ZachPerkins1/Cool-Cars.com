import { Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';

function Wishlist() {

    return (
        <>
            <NavBar />
            <div>Wishlist page</div>
            <Link to={`/`}>
                <button variant="contained">Link to Home.</button>
            </Link>
        </>
    )
}

export default Wishlist