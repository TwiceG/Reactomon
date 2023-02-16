import React from "react";
import axios from "axios";
import { useState } from "react";

export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    async function getPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        setPokemons(response.data.results);
    }
    getPokemons();

    return (
        <main>
            <ul>
                {pokemons.map((pokemon) => (
                    <li
                        className="pokemon"
                        key={pokemon.url}
                    >
                        {pokemon.name}
                    </li>
                ))}
            </ul>
            <p>Is it working??</p> 
        </main>
    )
}