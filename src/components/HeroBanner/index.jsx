import FilmPosterGrid from '../FilmPosterGrid';
import './style.css';

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__bg-text">CINEMA</div>
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__since">— Since 1895</p>
          <h1 className="hero__headline">
            <span className="hero__line">Track films you've watched.</span>
            <span className="hero__line hero__line--green">Save those you want to see.</span>
            <span className="hero__line">Tell your friends what's good.</span>
          </h1>
          <p className="hero__sub">
            O diário cinematográfico para quem leva o cinema a sério.<br />
            Avalie, critique e colecione.
          </p>
          <div className="hero__actions">
            <button className="hero__cta hero__cta--primary">Criar Conta</button>
            <button className="hero__cta hero__cta--ghost">Ver Filmes</button>
          </div>
        </div>
        <FilmPosterGrid />
      </div>
    </section>
  );
}
