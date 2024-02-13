import { useEffect, useState } from 'react';
import { fetchMovieByReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { ReviewsMovieList } from '../ReviewsMovieList/ReviewsMovieList';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const responce = await fetchMovieByReviews(movieId);
        console.log(responce);
        setReviewsMovie(responce);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCastData();
  }, [movieId]);
  return (
    <div>
      <h2>Reviews</h2>
      {reviewsMovie.length === 0 ? (
        'not have reviews'
      ) : (
        <ReviewsMovieList reviewsMovie={reviewsMovie} />
      )}
    </div>
  );
};
