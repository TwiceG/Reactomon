import '../style/ListPokemons.css'
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";



export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonSprite, setPokemonSprite] = useState([]);
    const [nextPokemons, setNextPokemons] = useState([]);
    const [pokemonURLs, setPokemonURLs] = useState([]);

    async function getPokemons(url='https://pokeapi.co/api/v2/pokemon/') {
        const response = await axios.get(`${url}`); 
        setPokemons(response.data.results);
    }
   

    /* getPokemons() */
   /*  console.log(1, pokemons); */

    const getPokemonDetails = () => {
        const datas = [];
        pokemons.map( async (pokemon) => {
            const response = await axios.get(pokemon.url);
            datas.push(response.data);
        })
        setPokemonData(datas);
        setSprites();
    }

    const handleClick = (url) => {
        getPokemonDetails(url);
        console.log(pokemonData);
    }

    const setSprites =  () => {
        const sprites = [];
        pokemonData.map((pokemon) => {       
            sprites.push(pokemon.sprites);
        })
        setPokemonSprite(sprites);
    }

    function setURL() {
        const urls = [];
        pokemons.map((pokemon) => {
            urls.push(pokemon.url);
        })
        setPokemonURLs(urls);
    }
    
    
    useEffect(() =>{
        getPokemons();
        console.log("1");
        console.log(pokemons);
    },[]);

    useEffect(() => {
        setURL();
        console.log("2");
        console.log(pokemonURLs);
    }, [pokemons]);

    
    useEffect(() => {
        getPokemonDetails();
        console.log("3");
        console.log(pokemonData);
    }, [pokemons])
    
    useEffect(() => {
        setSprites();
        console.log("list aaaaaa",pokemonSprite );
        console.log("index", pokemonSprite[0]);
        if (pokemonSprite[0]){

            console.log("index", pokemonSprite[0].front_default);
        }
    
    }, [pokemons])
    
    return (
        <div className='list-wrapper'>
            <div className="pokemon-list">
                    {pokemons.map((pokemon, i) => (
                        <div className="card" key={pokemon.url}> 
                            <div className="card-header">
                                {pokemon.name}
                            </div>
                            <div 
                                onClick={(url) => handleClick(pokemon.url)} 
                                className="card-body"
                                >
                                    <img src={pokemonSprite.front_default} alt={pokemon.name} />
                            </div>
                            <div className="card-footer">
                                <button className='btn'>Stats</button>
                            </div>
                        </div>
                    ))}
            </div>
            <button className='btn' id="back-button">BACK</button>
            <button className='btn' id="next-button">NEXT</button>
        </div>   
    )
}