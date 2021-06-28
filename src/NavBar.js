import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Bin2Dec</h1>
            <div className="links">
                {/*Testing*/}
                <Link to='/Bin2Dec/'>Home</Link>
                <Link to='/Bin2Dec/about'>How the Math Works</Link>
            </div>
        </nav>
    );
}

export default Navbar;