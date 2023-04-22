import { Link, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { fetchTrending } from '../utils/FetchFunc.jsx';
import { useState, useEffect } from 'react';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      const trendMovies = await fetchTrending();
      setTrendingMovies(trendMovies.data.results);
    };
    fetchTrendMovies();
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home trendMovies={trendingMovies} />} />
        <Route path={`/movies`} element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
