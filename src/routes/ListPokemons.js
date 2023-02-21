import '../style/ListPokemons.css'
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";



export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);

    const [nextPokemons, setNextPokemons] = useState([]);
    const [lastPokemons, lastNextPokemons] = useState([]);
    
    async function getPokemons(url='https://pokeapi.co/api/v2/pokemon/') {
        const response = await axios.get(`${url}`); 
       /*  return response.data.results; */
        setPokemons(response.data.results); 
    }
   
    const getPokemonData = async (url='https://pokeapi.co/api/v2/pokemon/') => {
        const response = await axios.get(url);
        setPokemonData(response.data);
    }



    const handleNext = () => {
        getPokemons(nextPokemons);
        bindImg();
        setNextPokemons(pokemonData.next);
        getPokemonData(nextPokemons);
    }

    const bindImg = () => {
        pokemons.forEach((pokemon) => {
            axios.get(pokemon.url)
            .then(
                response => {
                    pokemon.img = response.data.sprites.front_default;
                    setPokemons([...pokemons]);
                     
                } 
            )
        })
    }
    
    
    useEffect(() =>{
        getPokemons();
        getPokemonData();
        bindImg();
        
    },[]);

/*     useEffect(() =>{
        getPokemonData(nextPokemons);
    },[]); */

/*     useEffect(() => {
        pokemons.forEach((pokemon) => {
            axios.get(pokemon.url)
            .then(
                response => {
                    pokemon.img = response.data.sprites.front_default;
                    setPokemons([...pokemons]);
                } 
            )
        })
    }, []); */


    
    return (
        <div className='list-wrapper'>
            <div className="pokemon-list">
                    {pokemons.map((pokemon, i) => (
                        <div className="card" key={pokemon.url}> 
                            <div className="card-header">
                                {pokemon.name}
                            </div>
                            <div 
                                className="card-body"
                                >
                                   {pokemon.img && <img src={pokemon.img} alt={pokemon.name} />}
                            </div>
                            <div className="card-footer">
                                <button className='btn'>Stats</button>
                            </div>
                        </div>
                    ))}
            </div>
            <button className='btn' id="back-button">BACK</button>
            <button onClick={() => handleNext()} className='btn' id="next-button">NEXT</button>
        </div>   
    )
}