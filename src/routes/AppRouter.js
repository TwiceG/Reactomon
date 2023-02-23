import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListPokemons } from "./ListPokemons";
import { ListTypes } from "./ListTypes";
import { PokemonDetails } from "./PokemonDetails";

function Approuter() {
    return (  
            <Routes>
                <Route path="/list-pokemons" element={ <ListPokemons /> } />
                <Route path="/list-types" element={ <ListTypes /> } />
                <Route path="/pokemon-details/:id" element={ <PokemonDetails /> } />
            </Routes>
    );
}

export default Approuter;