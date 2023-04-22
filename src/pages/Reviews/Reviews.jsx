import { fetchReviews } from 'utils/FetchFunc';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reviewsResponse = await fetchReviews(movieId);
        setReviews(reviewsResponse.data.results);
        if (reviewsResponse.data.results.length === 0) {
          Notiflix.Notify.info('No reviews available');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReview();
  }, [movieId]);
  return (
    <>
      {isLoading === true && <ProgressBar width="100%" />}
      {isLoading === false && (
        <ul className={css.list}>
          {reviews.map(review => (
            <li className={css.listItem} key={review.id}>
              <p className={css.name}>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
