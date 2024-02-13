import { useEffect, useState } from 'react';
import { fetchData } from '../../api';
import { TrendingFilmList } from '../../components/TrendingFilmList/TrendingFilmList';
import css from './HomePage.module.css';

export default function HomePage() {
  const [error, setError] = useState(false);
  const [trendMovie, setTrendMovie] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const responce = await fetchData();
        // console.log(responce.results);
        setTrendMovie(responce.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    };
    fetchedData();
  });
  return (
    <div>
      <h1 className={css.trend}>Trending</h1>
      {error === true ? 'please again lates' : <TrendingFilmList items={trendMovie} />}
    </div>
  );
}
