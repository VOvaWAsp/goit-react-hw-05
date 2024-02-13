import { NavLink } from 'react-router-dom';
import css from './TrendingFilmList.module.css';

export const TrendingFilmList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <NavLink className={css.link} to={`/movies/${item.id}`}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
