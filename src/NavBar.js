import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Bin2Dec</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>How the Math Works</Link>
            </div>
        </nav>
    );
}

export default Navbar;