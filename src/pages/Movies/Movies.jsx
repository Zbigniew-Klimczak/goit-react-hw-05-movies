import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import css from './Movies.module.css';
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { fetchSearch } from 'utils/FetchFunc';
const Movies = () => {
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
        if (searchResponse.data.results.length === 0) {
          Notiflix.Notify.info('No movies with that title');
        }
      }
    };
    fetchSearchedMovies();
  }, [searchParams]);
  const handleSubmit = async e => {
    e.preventDefault();
    navigate(`/movies/?query=${searchValue}`);
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Enter movie title"
          onChange={e => {
            setSearchValue(e.target.value.trim());
          }}
        />
        <button type="Submit">Search</button>
      </form>
      <ul className={css.list}>
        {searchMovies.map(movie => (
          <li key={movie.id}>
            <Link
              className={css.listItem}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title === undefined ? movie.name : movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
