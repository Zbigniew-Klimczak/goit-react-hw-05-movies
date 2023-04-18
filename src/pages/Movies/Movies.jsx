import { useState } from 'react';
import { fetchSearch } from 'utils/FetchFunc';
export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const searchResponse = await fetchSearch(searchValue);
    setSearchMovies(searchResponse.data.results);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => {
            setSearchValue(e.target.value.trim());
          }}
        />
        <button type="Submit">Search</button>
      </form>
      <ul>
        {searchMovies.map(movie => (
          <li key={movie.id}>
            {movie.title === undefined ? movie.name : movie.title}
          </li>
        ))}
      </ul>
    </>
  );
};
