



import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/Api';
import { BASE_IMAGE_URL, PLACEHOLDER } from 'utils/constants';
import { Img } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <Img
                src={`${profile_path ? BASE_IMAGE_URL + profile_path
                  : PLACEHOLDER + '?text=' + original_name
                }`}
                // src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Cast;

