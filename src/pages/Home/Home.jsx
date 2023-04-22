import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
const Home = ({ trendMovies }) => {
  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <ul className={css.list}>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link
              className={css.listItem}
              to={`/movies/${movie.id}`}
              state={{ from: '/' }}
            >
              {movie.title === undefined ? movie.name : movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
Home.propTypes = {
  onSubmit: PropTypes.arrayOf(PropTypes.object),
};
