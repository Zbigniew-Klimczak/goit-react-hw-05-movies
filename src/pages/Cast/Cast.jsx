import { fetchCredits } from 'utils/FetchFunc';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';
export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const credits = await fetchCredits(movieId);
        setCastList(credits.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {isLoading === true && <ProgressBar width="100%" />}
      {isLoading === false && (
        <>
          {castList.length === 0 && (
            <p>Unfortunatelly we don't have informations about the cast.</p>
          )}
          {castList.length > 0 && (
            <ul>
              {castList.map(castMember => (
                <li key={castMember.id}>
                  <img
                    loading="lazy"
                    src={
                      castMember.profile_path !== null
                        ? `https://image.tmdb.org/t/p/w300${castMember.profile_path}`
                        : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
                    }
                    alt={castMember.name}
                  />
                  <p>{castMember.name}</p>
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
