import './style/Navbar.css';

export const Navbar = () => {
    return (
        <nav>
            <a href="/"><img id="logo" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="Written Pokemon logo" /></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/list-pokemons">Pokemons</a></li>
                <li><a href="/list-types">Pokemon types</a></li>
            </ul>
        </nav>
    )
}