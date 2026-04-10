import UserAvatar from '../UserAvatar';
import StarRating from '../StarRating';
import TagBadge from '../TagBadge';
import './style.css';

export default function ActivityItem({ initials, avatarColor, username, action, film, time, rating, tag, excerpt, onClick }) {
  return (
    <div className="activity-item" onClick={onClick}>
      <UserAvatar initials={initials} color={avatarColor} size="sm" />
      <div className="activity-item__body">
        <p className="activity-item__text">
          <span className="activity-item__username">{username}</span>
          <span className="activity-item__action"> {action} </span>
          <span className="activity-item__film">{film}</span>
        </p>
        {rating > 0 && <StarRating rating={rating} />}
        {excerpt && <p className="activity-item__excerpt">{excerpt}</p>}
        <div className="activity-item__meta">
          <span className="activity-item__time">{time}</span>
          {tag && <TagBadge label={tag} />}
        </div>
      </div>
    </div>
  );
}
