import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../api';
import css from './MovieDetailsPage.module.css';
import { BackLink } from '../../components/BackLink/BackLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLink = useRef(location.state);
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const fetchDataMovie = async () => {
      try {
        const responce = await fetchMovieById(movieId);
        console.log(responce);
        setMovie(responce);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataMovie();
  }, [movieId]);
  //   const genreses = movie.genres;
  //   console.log(genreses);
  return (
    <div className={css.container}>
      <BackLink href={backLink.current ?? '/'}>Back</BackLink>
      <div>
        <div className={css.containerInfo}>
          <img
            className={css.backImage}
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : `https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg`
            }
          />
        </div>
        <div className={css.posterStatus}>
          <img
            className={css.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg`
            }
          />
          <div className={css.info}>
            <h2>{movie.title}</h2>
            <a className={css.link} href={movie.homepage}>
              {movie.homepage}
            </a>
            <p className={css.text}>
              Adult <span>{movie.adult ? 'adult' : 'not adult'}</span>
            </p>
            {/* <ul>
          {genreses.map(item => {
            return (
              <li key={item.id}>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul> */}
            <p className={css.text}>
              Original language <span>{movie.original_language}</span>
            </p>
            <p className={css.text}>
              Overview <span>{movie.overview}</span>
            </p>
            <p className={css.text}>
              Popularity <span>{movie.popularity}</span>
            </p>
            <p className={css.text}>
              Status <span>{movie.status}</span>
            </p>
            <p className={css.text}>
              Tagline <span>{movie.tagline}</span>
            </p>
          </div>
        </div>
      </div>
      <NavLink className={css.navLink} to="cast">
        cast
      </NavLink>
      <NavLink className={css.navLink} to="reviews">
        reviews
      </NavLink>
      <Outlet />
    </div>
  );
}
