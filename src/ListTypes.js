import React from "react";
import axios from "axios";
import { useState } from "react";

export const ListTypes = () => {
    const [types, setTypes] = useState([]);
    async function getTypes() {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/`);
        setTypes(response.data.results);
    }
    getTypes();

    return (
        <main>
            <ul>
                {types.map((type) => (
                    <li
                        className="type"
                        key={type.url}
                    >
                        {type.name}
                    </li>
                ))}
            </ul>
        </main>
    )
}