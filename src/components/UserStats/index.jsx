import './style.css';

export default function UserStats({ films = 0, lists = 0, following = 0 }) {
  const stats = [
    { label: 'Filmes',   value: films },
    { label: 'Listas',   value: lists },
    { label: 'Seguindo', value: following },
  ];

  return (
    <div className="user-stats">
      {stats.map(({ label, value }) => (
        <div key={label} className="user-stats__item">
          <span className="user-stats__value">{value.toLocaleString('pt-BR')}</span>
          <span className="user-stats__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
