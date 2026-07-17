import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>MediFlow</h2>

      <nav className="header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;