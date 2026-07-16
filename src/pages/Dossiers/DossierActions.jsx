 import { Link } from "react-router-dom";


function DossierActions(){

    return(
          <nav>
      <Link to="/Dossiers">Dossiers</Link>
     <Link to="/add-Dossier">add Dossier</Link>
    <Link to="/update-Dossier">update Dossier</Link>
    </nav>
    )

}

export default DossierActions;