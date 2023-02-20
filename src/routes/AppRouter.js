import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListPokemons } from "./ListPokemons";
import { ListTypes } from "./ListTypes";

function Approuter() {
    return (  
            <Routes>
                <Route path="/list-pokemons" element={ <ListPokemons /> } />
                <Route path="/list-types" element={ <ListTypes /> } />
            </Routes>
    );
}

export default Approuter;