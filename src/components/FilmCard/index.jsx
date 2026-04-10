import StarRating from '../StarRating';
import './style.css';

export default function FilmCard({ title, year, rating, src }) {
  return (
    <div className="film-card">
      <div className="film-card__poster">
        <img src={src} alt={title} className="film-card__img" />
        <div className="film-card__overlay" />
      </div>
      <StarRating rating={rating} />
      <p className="film-card__title">{title}</p>
      {year && <span className="film-card__year">{year}</span>}
    </div>
  );
}
