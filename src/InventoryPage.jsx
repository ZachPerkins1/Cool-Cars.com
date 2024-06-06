import { Link } from 'react-router-dom';

function InventoryPage() {

    return (
        <>
            <div>This is gonna be an inventory page.</div>
            <Link to={`/`}>
                <button variant="contained">Link to Home.</button>
            </Link>
        </>
    )
}

export default InventoryPage