
import{ useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(Response => Response.json())
      .then(data => setCharacters(data));
  }, []);


  return (
    <div>
      <div className="card-container">
        {characters.map(character => (
          <div className="card" key={character.name}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;