import './style.css';
import beautifulBoy from '../../assets/images/beautiful boy.webp';
import deadPoetsSociety from '../../assets/images/dead_poets_society.webp';
import genioIndomavel from '../../assets/images/genio_indomavel.webp';
import martySupreme from '../../assets/images/marty supreme.webp';
import rocky from '../../assets/images/Rocky.webp';
import sentimentalValue from '../../assets/images/sentimental value.webp';
import theGodfather from '../../assets/images/the godfather.webp';
import wildRobot from '../../assets/images/wild robot.webp';

const posters = [
  { src: beautifulBoy, year: '2018' },
  { src: deadPoetsSociety, year: '1989' },
  { src: genioIndomavel, year: '1997' },
  { src: martySupreme, year: '2025' },
  { src: rocky, year: '1976' },
  { src: sentimentalValue, year: '1977' },
  { src: theGodfather, year: '1972' },
  { src: wildRobot, year: '2024' },
];

export default function FilmPosterGrid() {
  return (
    <div className="film-poster-grid">
      {posters.map((p, i) => (
        <div
          key={i}
          className="film-poster-grid__item"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          <img src={p.src} alt="" className="film-poster-grid__img" />
          <span className="film-poster-grid__year">{p.year}</span>
        </div>
      ))}
    </div>
  );
}
