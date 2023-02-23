import '../style/ListPokemons.css'
import React from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";



export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    

    const [nextPokemons, setNextPokemons] = useState([]);
    const [lastPokemons, setLastPokemons] = useState([]);

    const navigate = useNavigate();
    
    async function getPokemons(url='https://pokeapi.co/api/v2/pokemon/') {
        const response = await axios.get(`${url}`); 
        return response.data.results;
        /* setPokemons(response.data.results); */ 
    }
   
    async function getPokemonData(url='https://pokeapi.co/api/v2/pokemon/') {
        const response = await axios.get(url);
        return response.data;
        /* setPokemonData(response.data); */
    }



    const handleNext = () => {
        pokemonData.next && setNextPokemons(pokemonData.next);
        getPokemons(nextPokemons)
        .then((pokeData) => {
            setPokemons(pokeData);
        })
        bindImg();
        getPokemonData(nextPokemons)
        .then((data) => {
            setPokemonData(data);
        })
        
    }

    const handleBack = () => {
        pokemonData.previous && setLastPokemons(pokemonData.previous);
        getPokemons(lastPokemons)
            .then((pokeData) => {
                setPokemons(pokeData);
            })
        bindImg();
        getPokemonData(lastPokemons)
        .then((data) => {
            setPokemonData(data);
        })
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
    
    const openPokemonDetails = (id) => {
            navigate(`/pokemon-details/${id}`)
    }
    
    
    useEffect(() =>{
        getPokemons()
            .then((pokeData) => {
                setPokemons(pokeData);
            })
        getPokemonData()
            .then((data) => {
                setPokemonData(data);
            })
            bindImg();  
        
    },[]);

    if (pokemonData === null) {
        return ("Loading");
    }

    
    return (
        <div className='list-wrapper'>
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
                            <Link to={`/pokemon-details/${pokemon.url.at(-2)}`}><button  onClick={(id) => openPokemonDetails(pokemon.url.at(-2))} className='btn'>Stats</button></Link>
                            </div>
                        </div>
                    ))}
            </div>
            <button onClick={handleBack} className='btn' id="back-button">BACK</button>
            <button onClick={handleNext} className='btn' id="next-button">NEXT</button>
        </div>   
    )
}