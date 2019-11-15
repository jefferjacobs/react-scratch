import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StarWarsCharacter } from '../../interfaces/StarWars';

function HttpAxios() {

  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);
  const [loadingCharacters, setLoadingCharacters] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoadingCharacters(true);
    const response = await axios('https://swapi.co/api/people');
    setCharacters(response.data.results);
    setLoadingCharacters(false);
  }

  return (
    <div className="HttpXHR Content-Padded">
      <h1>Http Axios</h1>
      { loadingCharacters ? (
        <div>Loading...</div>
      ) : undefined}
      {characters.map((character: StarWarsCharacter, index: number) => {
        return (
          <div className="Character" key={index} style={{marginTop: '20px'}}>
            <div><strong>{ character.name }</strong></div>
            <div>{ character.gender }</div>
            <div>{ character.birth_year }</div>
          </div>
        )
      })}
    </div>
  )
}

export default HttpAxios;