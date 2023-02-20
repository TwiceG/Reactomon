import './style/App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import Approuter from './routes/AppRouter';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Navbar />
          <div id="img-wrapper">
            <img id="main-pokemons" src="https://www.pngkit.com/png/full/160-1608486_pokemon-characters-png-download-image-pokemon-pikachu.png" alt="Main pokemons" />
          </div>
          <Approuter />
      </BrowserRouter>
    </div>
  );
}

export default App;
