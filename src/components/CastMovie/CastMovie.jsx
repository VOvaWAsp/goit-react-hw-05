import { useEffect, useState } from 'react';
import { fetchMovieByCast } from '../../api';
import { useParams } from 'react-router-dom';
import { CastMovieList } from '../СastMovieList/CastMovieList';

export const CastMovie = () => {
  const { movieId } = useParams();
  const [castMovie, setCastMovie] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const responce = await fetchMovieByCast(movieId);
        console.log(responce);
        setCastMovie(responce);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCastData();
  }, [movieId]);
  return (
    <div>
      <h2>Cast</h2>
      {castMovie.length === 0 ? 'not have cast' : <CastMovieList castMovie={castMovie} />}
    </div>
  );
};
