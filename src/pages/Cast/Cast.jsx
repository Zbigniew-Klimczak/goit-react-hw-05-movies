import { fetchCredits } from 'utils/FetchFunc';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Notiflix from 'notiflix';

import css from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const credits = await fetchCredits(movieId);
        setCastList(credits.data.cast);
        if (credits.data.cast.length === 0) {
          Notiflix.Notify.info('No information about the cast');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId, castList]);
  return (
    <>
      {isLoading === true && <ProgressBar width="100%" />}
      {isLoading === false && (
        <>
          {castList.length === 0 && (
            <p>Unfortunatelly we don't have informations about the cast.</p>
          )}
          {castList.length > 0 && (
            <ul className={css.list}>
              {castList.map(castMember => (
                <li className={css.listItem} key={castMember.id}>
                  <img
                    loading="lazy"
                    src={
                      castMember.profile_path !== null
                        ? `https://image.tmdb.org/t/p/w300${castMember.profile_path}`
                        : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
                    }
                    alt={castMember.name}
                  />
                  <p className={css.name}>{castMember.name}</p>
                  <p>Character: {castMember.character}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};
export default Cast;
