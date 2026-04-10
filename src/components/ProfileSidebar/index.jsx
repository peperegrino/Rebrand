import UserAvatar from '../UserAvatar';
import UserStats from '../UserStats';
import GenreBarChart from '../GenreBarChart';
import './style.css';

const defaultUser = {
  name: 'Maria Ravel',
  handle: '@m_ravel',
  initials: 'MR',
  avatarColor: '#00c030',
  films: 847,
  lists: 134,
  following: 23,
};

export default function ProfileSidebar({ id, user }) {
  const currentUser = user || defaultUser;
  return (
    <aside className="profile-sidebar" id={id}>
      <div className="profile-sidebar__header">
        <span className="profile-sidebar__label">● Perfil</span>
      </div>
      <div className="profile-sidebar__identity">
        <UserAvatar initials={currentUser.initials} color={currentUser.avatarColor} size="lg" />
        <div>
          <p className="profile-sidebar__name">{currentUser.name}</p>
          <p className="profile-sidebar__handle">{currentUser.handle}</p>
        </div>
      </div>
      <UserStats films={currentUser.films} lists={currentUser.lists} following={currentUser.following} />
      <GenreBarChart />
    </aside>
  );
}
