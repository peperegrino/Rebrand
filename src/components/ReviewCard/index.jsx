import UserAvatar from '../UserAvatar';
import StarRating from '../StarRating';
import './style.css';

export default function ReviewCard({ initials, avatarColor, username, film, rating, excerpt, likes, date }) {
  return (
    <article className="review-card">
      <div className="review-card__header">
        <UserAvatar initials={initials} color={avatarColor} size="sm" />
        <div className="review-card__meta">
          <a href="#" className="review-card__username">{username}</a>
          <StarRating rating={rating} />
        </div>
        <a href="#" className="review-card__film">{film}</a>
      </div>
      <blockquote className="review-card__excerpt">"{excerpt}"</blockquote>
      <footer className="review-card__footer">
        <span className="review-card__date">{date}</span>
        <span className="review-card__likes">♡ {likes}</span>
      </footer>
    </article>
  );
}
