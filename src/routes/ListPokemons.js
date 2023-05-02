import '../style/ListPokemons.css'
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";



export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    

    const [nextPokemons, setNextPokemons] = useState([]);
    const [lastPokemons, setLastPokemons] = useState([]);
    
    async function getPokemons(url='https://pokeapi.co/api/v2/pokemon/') {
        const response = await axios.get(`${url}`); 
        // return response.data.results;
        setPokemons(response.data.results);
    }
   
    async function getPokemonData(url='https://pokeapi.co/api/v2/pokemon/') {
        const response = await axios.get(url);
        // return response.data;
        setPokemonData(response.data);
    }

    const handleData = (url) => {
        getPokemons(url)
        getPokemonData(url)
    }



    const handleNext = () => {
        pokemonData.next && setNextPokemons(pokemonData.next);
    }

    const handleBack = () => {
        pokemonData.previous && setLastPokemons(pokemonData.previous);
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
        handleData(nextPokemons);
        bindImg();
    },[nextPokemons]);

    useEffect(() =>{
        handleData(lastPokemons);
        bindImg();
    },[lastPokemons]);

    useEffect(() => {
        getPokemons();
        getPokemonData();
    },[])

    if(pokemons.length > 0) {
        if (Object.keys(pokemons[0]).length < 3){
            bindImg();
            return "LOOOOOOAAAADDDIIIING";
        }
    } 
    
    
    return (
        <div className='list-wrapper'>
            <button onClick={handleBack} className='btn' id="back-button">BACK</button>
            <button onClick={handleNext} className='btn' id="next-button">NEXT</button>
            <div className="pokemon-list">
                    {pokemons.map((pokemon) => (
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
                            <Link to={isNaN(parseInt(pokemon.url.slice(-3,-1))) ? `/pokemon-details/${pokemon.url.slice(-2,-1)}` : `/pokemon-details/${pokemon.url.slice(-3,-1)}` }><button   className='btn'>Stats</button></Link>
                            </div>
                        </div>
                    ))}
            </div>
            
        </div>   
    )
}