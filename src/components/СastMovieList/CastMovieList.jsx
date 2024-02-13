import css from './CastMovieList.module.css';

export const CastMovieList = ({ castMovie }) => {
  return (
    <ul className={css.container}>
      {castMovie.map(item => {
        return (
          <li key={item.id}>
            <h2>
              Name <span>{item.name}</span>
            </h2>
            <h3 className={css.text}>
              Character <span>{item.character}</span>
            </h3>
            <p className={css.text}>
              Adult <span>{item.adult ? 'adult' : 'not adult'}</span>
            </p>
            <p className={css.text}>
              Gender <span>{item.gender}</span>
            </p>
            <p className={css.text}>
              Popularity <span>{item.popularity}</span>
            </p>
            <p className={css.text}>
              Known for department <span>{item.known_for_department}</span>
            </p>
            <img
              className={css.image}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : `https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg`
              }
              alt={item.name}
            />
          </li>
        );
      })}
    </ul>
  );
};
