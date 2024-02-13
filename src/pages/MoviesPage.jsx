import { useState, useEffect } from 'react';
import { fetchMovieApi } from '../api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { SearchMovies } from '../components/SearchMovies/SearchMovies';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [moviesParams, setMoviesParams] = useSearchParams();

  const search = moviesParams.get('query') ?? '';

  const handleSubmit = value => {
    moviesParams.set('query', value ?? '');
    setMoviesParams(moviesParams);
  };

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const responce = await fetchMovieApi({ query: search });
        console.log(responce.results);
        setMovies(responce.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataMovie();
  }, [search]);

  return (
    <div>
      <h2>Movies page</h2>
      <SearchMovies onSubmit={handleSubmit} />
      <MoviesList items={movies} />
    </div>
  );
}
