import PropTypes from 'prop-types';
export const Home = ({ trendMovies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            {movie.title === undefined ? movie.name : movie.title}
          </li>
        ))}
      </ul>
    </>
  );
};
Home.propTypes = {
  onSubmit: PropTypes.arrayOf(PropTypes.object),
};
