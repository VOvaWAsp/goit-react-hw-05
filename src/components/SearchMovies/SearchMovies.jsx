import css from './SearchMovie.module.css';

export const SearchMovies = ({ onSubmit }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(event.target.searchMovies.value);
      }}
    >
      <input className={css.search} type="text" name="searchMovies" />
      <button className={css.btn} type="submit">
        search
      </button>
    </form>
  );
};
