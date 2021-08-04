import {Link} from 'react-router-dom'
import symbol from './img/swap_icon.png'


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Bin<img src={symbol} alt='2'/>Dec</h1>
            <div className="links">
                <Link to='/Bin2Dec/'>Home</Link>
                <Link to='/Bin2Dec/about'>How the Math Works</Link>
            </div>
        </nav>
    );
}

export default Navbar;