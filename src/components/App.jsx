import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from '../pages/HomePage/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import { CastMovie } from './CastMovie/CastMovie';
import { MovieReviews } from './MovieReviews/MovieReviews';
import { NavBar } from './NavBar/NavBar';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
// const MovieDetailsPage = lazy(() => import('../pages/MoviesPage'));
// const MoviesPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));

export default function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastMovie />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
