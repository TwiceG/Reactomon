import './Navbar.css';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/list-pokemons">Pokemons</a></li>
                <li><a href="/list-types">Pokemon types</a></li>
            </ul>
        </nav>
    )
}