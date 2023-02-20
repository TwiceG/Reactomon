import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { ListPokemons } from "./ListPokemons";
import { ListTypes } from "./ListTypes";

function Approuter() {
    return (  
            <Routes>
                <Route 
                    path="/list-pokemons" 
                    element={ <ListPokemons /> } 
                    loader={ async function getPokemons(url='https://pokeapi.co/api/v2/pokemon/') {
                        const response = await axios.get(`${url}`); 
                        return response.data.results;
                    } }
                    />
                <Route 
                    path="/list-types" 
                    element={ <ListTypes /> } />
            </Routes>
    );
}

export default Approuter;