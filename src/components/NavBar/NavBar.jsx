import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={css.navBar}>
      <NavLink className={css.link} to="/">
        Home page
      </NavLink>
      <NavLink className={css.link} to="/movies">
        Movies page
      </NavLink>
    </nav>
  );
};
