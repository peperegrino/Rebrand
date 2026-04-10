import './style.css';

export default function UserAvatar({ initials, color = '#c0392b', size = 'md' }) {
  return (
    <div className={`user-avatar user-avatar--${size}`} style={{ background: color }}>
      <span className="user-avatar__initials">{initials}</span>
    </div>
  );
}
