import './style.css';
import logo from '../../assets/icons/Letterboxd-icon.webp';

const links = ['Sobre', 'Contato', 'API', 'Imprensa', 'Apps', 'Podcast'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Letterboxd" className="footer__logo" />
          <span className="footer__logo-text">LETTERBOXD</span>
        </div>
        <nav className="footer__nav">
          {links.map((l) => (
            <a key={l} href="#" className="footer__link">{l}</a>
          ))}
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} Letterboxd Limited</p>
      </div>
    </footer>
  );
}
