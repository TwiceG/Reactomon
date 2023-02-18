import React from "react";
import axios from "axios";
import { useState } from "react";

export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsData, setPokemonData] = useState([]);
    async function getPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        setPokemons(response.data.results);
    }
    getPokemons();

    const getPokemonDetails = async (url) => {
        const response = await axios.get(`${url}`);
        setPokemonData(response.data);
    }

    const handleClick = (url) => {
        getPokemonDetails(url);
        console.log(pokemonsData);
    }


    return (
        <main>
            <ul>
                {pokemons.map((pokemon) => (
                    <li
                        onClick={(url) => handleClick(pokemon.url)}
                        className="pokemon"
                        key={pokemon.url}
                    >
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </main>
    )
}