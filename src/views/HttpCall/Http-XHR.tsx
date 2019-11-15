import React, { useState, useEffect } from 'react';
import { StarWarsCharacter } from '../../interfaces/StarWars';

function HttpXHR() {

  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);
  const [loadingCharacters, setLoadingCharacters] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoadingCharacters(true);
    var xhr = new XMLHttpRequest()
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      setCharacters(xhr.response.results);
      setLoadingCharacters(false);
    })
    xhr.open('GET', 'https://swapi.co/api/people/')
    xhr.send();
  }

  return (
    <div className="HttpXHR Content-Padded">
      <h1>Http XHR</h1>
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

export default HttpXHR;