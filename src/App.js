import React, { useEffect, useState } from 'react';
import qs from 'qs';
import Pagination from './components/Pagination';
import SearchInput from './components/SearchInput';


const api = 'https://kitsu.io/api/edge/';
const LIMIT = 12;

 function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    
      setInfo({});

      const query = {
        page : {
          limit : LIMIT,
          offset,
        }
      };
      if(text) {
        query.filter={
          text,
        }
      }
      fetch(`${api}anime?${qs.stringify(query)}`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    
  }, [text, offset]);

  return (
    <div className="App">
      <h1 className='title'>Animes List</h1>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />
      {text && !info.data && <span>Carregando...</span>}
      {info.data && (
        <ul className="animesList">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
      {info.meta && (
        <Pagination limit={LIMIT} total={info.meta.count} offset={offset} setOffset={setOffset} />
      )}
    </div>
  );
}

export default App;