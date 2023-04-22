import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const Home = ({ trendMovies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
              {movie.title === undefined ? movie.name : movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
Home.propTypes = {
  onSubmit: PropTypes.arrayOf(PropTypes.object),
};
