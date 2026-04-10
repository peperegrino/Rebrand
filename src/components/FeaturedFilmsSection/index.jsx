import FilmCard from '../FilmCard';
import './style.css';
import agenteSecreto from '../../assets/images/agente secreto.webp';
import frankestein from '../../assets/images/frankestein.webp';
import oneBattleAfterOther from '../../assets/images/one battle after other.webp';
import sinners from '../../assets/images/sinners.webp';
import topGun from '../../assets/images/top gun.webp';
import trainDreams from '../../assets/images/train dreams.webp';

const featured = [
  { title: 'Agente Secreto', year: '2025', rating: 4, src: agenteSecreto },
  { title: 'Frankenstein', year: '2025', rating: 5, src: frankestein },
  { title: 'One Battle After Other', year: '2025', rating: 4, src: oneBattleAfterOther },
  { title: 'Sinners', year: '2025', rating: 4, src: sinners },
  { title: 'Top Gun', year: '2022 ', rating: 5, src: topGun },
  { title: 'Train Dreams', year: '2025', rating: 4, src: trainDreams },
];

export default function FeaturedFilmsSection({ id }) {
  return (
    <section className="featured-films" id={id}>
      <div className="featured-films__inner">
        <div className="featured-films__header">
          <h2 className="featured-films__title">Em Destaque</h2>
          <a href="#filmes-hoje" className="featured-films__see-all">Ver todos &rarr;</a>
        </div>
        <div className="featured-films__grid">
          {featured.map((film) => (
            <FilmCard key={film.title} {...film} />
          ))}
        </div>
      </div>
    </section>
  );
}
