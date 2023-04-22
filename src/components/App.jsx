import { Link, Route, Routes } from 'react-router-dom';
import { fetchTrending } from '../utils/FetchFunc.jsx';
import { useState, useEffect, lazy, Suspense } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from './App.module.css';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

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
    <div className={css.app}>
      <nav className={css.nav}>
        <Link className={css.navItem} to="/">
          Home
        </Link>
        <Link className={css.navItem} to="/movies">
          Movies
        </Link>
      </nav>
      <Suspense fallback={<ProgressBar width="100%" />}>
        <Routes>
          <Route path="/" element={<Home trendMovies={trendingMovies} />} />
          <Route path={`/movies`} element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home trendMovies={trendingMovies} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
