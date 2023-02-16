import './App.css';
import { ListPokemons } from './ListPokemons';
import { ListTypes } from './ListTypes';

function App() {
  return (
    <div className="App">
      <h1>Pokemons here?!</h1>
      <ListPokemons />
      <ListTypes />
    </div>
  );
}

export default App;
