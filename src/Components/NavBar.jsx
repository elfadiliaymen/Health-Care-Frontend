import { Link } from "react-router-dom";

 
function NavBar(){

    return(
         <nav>
      <Link to="/patients-actions">patients</Link>
      <Link to = "/medecins-actions" >medecins</Link>
      <Link to ="/dossiers-actions">Dossiers</Link>
      <Link to ="/rendez-vous-actions">Rendez-Vous</Link>
    </nav>
    )

}

export default NavBar;