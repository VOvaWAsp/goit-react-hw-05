import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MoviesList = ({ items }) => {
  const location = useLocation();
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <NavLink className={css.link} to={`/movies/${item.id}`} state={location}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
