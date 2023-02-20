import './style/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <Link to="/"><img id="logo" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="Written Pokemon logo" /></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list-pokemons">Pokemons</Link></li>
                <li><Link to="/list-types">Pokemon types</Link></li>
            </ul>
        </nav>
    )
}