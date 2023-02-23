import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null);
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    let params = useParams();


    async function getPokemonData(url) {
        const response = await axios.get(url);
        /* setPokemon(response.data); */ 
        return response.data;
    }

    useEffect(() => {

        getPokemonData(url+params.id)
        .then((data) => {
            setPokemon(data);
        })
        
    }, [])

    if (pokemon === null) {
        return ("Loading");
    }

    return (
        <div className="card" key={pokemon.url}> 
                            <div className="card-header">
                                {pokemon.name}
                            </div>
                            <div 
                                className="card-body"
                                >
                                    {console.log(pokemon)}
                                   <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                   <p>Pokemon type: {pokemon.types[0].type.name}</p>
                                   <p>Pokemon weight: {pokemon.weight}</p>
                                   <p>Pokemon hp: {pokemon.stats[0].base_stat}</p>
                                   <p>Pokemon attack: {pokemon.stats[1].base_stat}</p>
                            </div>
                            <div className="card-footer">
                            
                            </div>
                        </div>

    )
}