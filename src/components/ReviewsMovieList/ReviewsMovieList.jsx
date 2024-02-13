import css from './ReviewsMovieList.module.css';

export const ReviewsMovieList = ({ reviewsMovie }) => {
  return (
    <ul className={css.container}>
      {reviewsMovie.map(item => {
        return (
          <li key={item.id}>
            <p className={css.text}>{item.author}</p>
            <p className={css.text}>{item.content}</p>
            <p className={css.text}>{item.created_at}</p>
            <p className={css.text}>{item.updated_at}</p>
            <a className={css.link} href={item.url}>
              {item.url}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
