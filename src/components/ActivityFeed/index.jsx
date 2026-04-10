import { useState } from 'react';
import ActivityItem from '../ActivityItem';
import './style.css';

const tabs = ['Atividade', 'Críticas', 'Listas'];

const allItems = [
  { initials: 'MM', avatarColor: '#c0392b', username: 'marcello', action: 'assistiu e avaliou', film: 'Oppenheimer', time: 'há 27 minutos', rating: 5, tag: 'Drama', excerpt: 'Christopher Nolan consegue novamente. Oppenheimer é um filme sobre a bomba atômica, mas também sobre a alma humana. Cillian Murphy é brilhante.' },
  { initials: 'FF', avatarColor: '#2980b9', username: 'felipe', action: 'adicionou', film: 'Dune: Part Two', time: 'há 1 hora', rating: 0, tag: 'Sci-Fi', excerpt: '' },
  { initials: 'JJ', avatarColor: '#8e44ad', username: 'johan', action: 'escreveu crítica de', film: "The Batman", time: 'há 2 horas', rating: 4, tag: 'Action', excerpt: "Robert Pattinson como Batman é perfeito. O filme é sombrio, mas cativante. A direção de Matt Reeves é impecável." },
  { initials: 'EE', avatarColor: '#16a085', username: 'eduardo', action: 'assistiu', film: 'Parasite', time: 'há 3 horas', rating: 5, tag: 'Thriller', excerpt: '' },
  { initials: 'ER', avatarColor: '#d35400', username: 'eric', action: 'adicionou', film: 'Inception', time: 'há 4 horas', rating: 0, tag: 'Sci-Fi', excerpt: '' },
];

const reviewsItems = [
  { initials: 'CC', avatarColor: '#e74c3c', username: 'caue', action: 'escreveu crítica de', film: 'Interstellar', time: 'há 30 minutos', rating: 5, tag: 'Sci-Fi', excerpt: 'Interstellar é uma obra-prima de ficção científica. Nolan explora temas profundos sobre tempo e espaço.' },
  { initials: 'RR', avatarColor: '#3498db', username: 'ryan', action: 'escreveu crítica de', film: 'The Shawshank Redemption', time: 'há 1 hora', rating: 5, tag: 'Drama', excerpt: 'Um filme sobre esperança e amizade. Tim Robbins e Morgan Freeman são excepcionais.' },
  { initials: 'DD', avatarColor: '#9b59b6', username: 'david', action: 'escreveu crítica de', film: 'Pulp Fiction', time: 'há 2 horas', rating: 4, tag: 'Crime', excerpt: 'Quentin Tarantino em sua melhor forma. Diálogos afiados e narrativa não linear.' },
];

const listsItems = [
  { initials: 'VV', avatarColor: '#1abc9c', username: 'victor', action: 'adicionou', film: 'The Matrix', time: 'há 45 minutos', rating: 0, tag: 'Sci-Fi', excerpt: '' },
  { initials: 'HH', avatarColor: '#f39c12', username: 'heitor', action: 'adicionou', film: 'Fight Club', time: 'há 1 hora', rating: 0, tag: 'Drama', excerpt: '' },
  { initials: 'FF', avatarColor: '#e67e22', username: 'fernando', action: 'adicionou', film: 'The Godfather', time: 'há 2 horas', rating: 0, tag: 'Crime', excerpt: '' },
];

const itemsSets = [allItems, reviewsItems, listsItems];

export default function ActivityFeed({ id, onUserSelect }) {
  const [active, setActive] = useState(0);

  const handleItemClick = (item) => {
    const fictitiousUser = {
      name: item.username.charAt(0).toUpperCase() + item.username.slice(1),
      handle: `@${item.username}`,
      initials: item.initials,
      avatarColor: item.avatarColor,
      films: Math.floor(Math.random() * 500) + 100,
      lists: Math.floor(Math.random() * 50) + 10,
      following: Math.floor(Math.random() * 100) + 20,
    };
    if (onUserSelect) {
      onUserSelect(fictitiousUser);
    }
  };

  return (
    <section className="activity-feed" id={id}>
      <div className="activity-feed__tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`activity-feed__tab ${i === active ? 'activity-feed__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="activity-feed__list">
        {itemsSets[active].map((item) => (
          <ActivityItem key={item.username + item.film} {...item} onClick={() => handleItemClick(item)} />
        ))}
      </div>
    </section>
  );
}
