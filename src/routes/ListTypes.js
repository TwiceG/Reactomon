import '../style/PokemonTypes.css'
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { PokemonDetails } from "./PokemonDetails";


export const ListTypes = () => {
    const [types, setTypes] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokemonURLs, setPokemonURLs] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);

    //Try for rerender pokemon cards
    const [typeURL, setTypeURL] = useState('');
    const [refresh, setRefresh] = useState(false);

    async function getTypes() {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/`);
        setTypes(response.data.results);
    }

    async function loadPokemons(url) {
        await axios.get(url).then( (response) => {
            setPokemons(response.data.pokemon);
            getPokemonURLs(response.data.pokemon);
    })
        setPokemonData([]);
        setTypeURL(url);
        setRefresh(false);
    }

    function getPokemonURLs(data) {
        let URLs = [];
        data.map((pokemon) => {
            URLs.push(pokemon.pokemon.url);
        })
        setPokemonURLs(URLs);
        

    }

    async function getPokemonDetails(index) {
        const response = await axios.get(pokemonURLs[index]);
        setPokemonData(response.data);
        setRefresh(true);
    }

    useEffect(() => {
        if(refresh) {
            loadPokemons(typeURL);
        }
    },[pokemonData])

    useEffect(() => {
        getTypes();
    },[])

    return (
        <>
        <div className='pokemon-types'>
                {types.map((type) => (
                    <div
                        className="type"
                        key={type.url}
                    >
                        <button className='btn' onClick={() => loadPokemons(type.url)}>{type.name}</button>
                    </div>
                ))}
        </div>
        {pokemons.length > 0 && pokemons.map((pokemon, index) => (
                        <div className="card" key={pokemon.url} onClick={(() => getPokemonDetails(index) )}> 
                            <div className="card-header">
                                <h1>{pokemon.pokemon.name}</h1>
                            </div>
                            <div className="card-body">
                                   {pokemonData.length > 0 && <div className="card" key={pokemonData.url}> 
                            <div className="card-header">
                                {pokemonData.name}
                            </div>
                            <div className="card-body" >
                                   <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                                   <p>Pokemon type: {pokemonData.types[0].type.name}</p>
                                   <p>Pokemon weight: {pokemonData.weight}</p>
                                   <p>Pokemon hp: {pokemonData.stats[0].base_stat}</p>
                                   <p>Pokemon attack: {pokemonData.stats[1].base_stat}</p>
                            </div>
                            <div className="card-footer">
                            
                            </div>
                        </div> }
                            </div>
                            <div className="card-footer">
                            </div>
                        </div>
                    ))}
        </>
    )
}