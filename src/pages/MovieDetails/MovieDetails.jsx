import { useParams } from 'react-router-dom';
import { fetchMovieId } from 'utils/FetchFunc';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const [movieIdState] = useState(movieId);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movie = await fetchMovieId(movieIdState);
      setMovieDetails(movie.data);
      console.log(movie.data);
    };
    fetchMovieDetails();
  }, [movieIdState]);
  const genresString = genres => {
    if (genres !== undefined) {
      let newArray = [];
      genres.forEach(element => {
        newArray.push(element.name);
      });
      return newArray.join(', ');
    }
  };
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img
          src={
            movieDetails.poster_path !== undefined
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : ''
          }
          alt={
            movieDetails.title === undefined
              ? movieDetails.name
              : movieDetails.title
          }
        />
        <div>
          <h2>
            {movieDetails.title === undefined
              ? movieDetails.name
              : movieDetails.title}{' '}
            {`(${movieDetails.release_date})`}
          </h2>
          <p>{`User score: ${Math.round(movieDetails.vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <p>{genresString(movieDetails.genres)}</p>
        </div>
      </div>
    </>
  );
};
