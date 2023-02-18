import './App.css';
import { Navbar } from './Navbar';
import { ReactDOM } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:   
        <>
        <img id="main-pokemons" src="https://www.pngkit.com/png/full/160-1608486_pokemon-characters-png-download-image-pokemon-pikachu.png" alt="Main pokemons" />
        <Navbar />
        </>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
