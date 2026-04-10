import './style.css';
import logo from '../../assets/icons/Letterboxd-icon.webp';

export default function Navbar({ onSignIn, onSignUp }) {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navbar">
      <div className="navbarInner">
        <div className="navbarBrand">
          <img src={logo} alt="Letterboxd" className="navbar__logo" />
          <span className="logo-text">LETTERBOXD</span>
        </div>
        <ul className="navbar__links">
          <li><button onClick={() => scrollToSection('filmes-hoje')} className="navbar__link">Films</button></li>
          <li><button onClick={() => scrollToSection('membros')} className="navbar__link">Members</button></li>
          <li><button onClick={() => scrollToSection('criticas')} className="navbar__link">Journal</button></li>
        </ul>
        <div className="navbar__auth">
          <button className="navbar__btn navbar__btn--ghost" onClick={onSignIn}>Sign in</button>
          <button className="navbar__btn navbar__btn--primary" onClick={onSignUp}>Create account</button>
        </div>
      </div>
    </nav>
  );
}
