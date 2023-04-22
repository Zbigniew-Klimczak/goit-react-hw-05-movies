import axios from 'axios';
const API_KEY = '72bcdf1138bae3d92557a121dfa74cd8';
export const fetchTrending = () => {
  const response = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return response;
};
export const fetchSearch = searchQuery => {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return response;
};
export const fetchMovieId = movieId => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return response;
};
export const fetchCredits = movieId => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response;
};
export const fetchReviews = movieId => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
};
