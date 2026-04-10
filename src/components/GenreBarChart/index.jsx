import './style.css';

const genres = [
  { name: 'Noir',    count: 214 },
  { name: 'Drama',   count: 178 },
  { name: 'Terror',  count: 134 },
  { name: 'Ação',    count: 97  },
  { name: 'Western', count: 68  },
];

const max = genres[0].count;

export default function GenreBarChart() {
  return (
    <div className="genre-bar-chart">
      <p className="genre-bar-chart__heading">Gêneros Favoritos</p>
      <ul className="genre-bar-chart__list">
        {genres.map(({ name, count }) => (
          <li key={name} className="genre-bar-chart__row">
            <span className="genre-bar-chart__name">{name}</span>
            <div className="genre-bar-chart__track">
              <div
                className="genre-bar-chart__fill"
                style={{ width: `${(count / max) * 100}%` }}
              />
            </div>
            <span className="genre-bar-chart__count">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
