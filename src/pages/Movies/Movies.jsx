import { useState, useEffect } from 'react';
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { fetchSearch } from 'utils/FetchFunc';
export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchSearchedMovies = async () => {
      const queryParam = searchParams.get('query');
      if (queryParam !== null) {
        const searchResponse = await fetchSearch(queryParam);
        setSearchMovies(searchResponse.data.results);
      }
    };
    fetchSearchedMovies();
  });
  const handleSubmit = async e => {
    e.preventDefault();
    navigate(`/movies/?query=${searchValue}`);
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
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title === undefined ? movie.name : movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
