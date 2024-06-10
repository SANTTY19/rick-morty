import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null); //pasar info a un nuevo componente
  // informacion pasada
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character'); //peticion a la api
    const characteApi = await api.json();

    setCharacters(characteApi.results);
  };
  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>

        {characters ? (
          <Characters Characters={characters} setCharacters = {setCharacters}/> // Cambiado a 'Characters'
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
