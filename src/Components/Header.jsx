import { Link , useNavigate} from "react-router-dom";

function Header() {

  const navigate = useNavigate();
  
  function logout(){

localStorage.removeItem("token");

navigate("/login");

}
  return (
    <header className="header">

      <div className="logo">
        <h1>MediFlow</h1>
        <span>Clinic Management System</span>
      </div>

      <nav className="header-nav">

        <Link to="/">Accueil</Link>

        <Link to="/dashboard">
          Dashboard
        </Link>
        <button className="btn-primary" onClick={logout}>Déconnexion</button>

      </nav>

    </header>
  );
}

export default Header;