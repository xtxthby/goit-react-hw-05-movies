
import { Suspense, useEffect, useState } from 'react';
import {
  Link, NavLink, Outlet, useLocation,useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/Api';
import { Text, Info } from './MovieDetailsPage.styled';
import { BASE_IMAGE_URL, PLACEHOLDER } from 'utils/constants';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
        <Link to={backLinkHref}>
          Go back<span>...</span>
        </Link>
      <Info>
        <img
          src={`${movie.poster_path ? BASE_IMAGE_URL + movie.poster_path
            : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          // src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="get"
        />
        <Text>
          <h2>{movie.original_title}</h2>
          <p>Rating: {Math.round(movie.vote_average)}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </p>
        </Text>
      </Info>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" state={location.state}>
              Cast<span>...</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>...</span>
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetailsPage;