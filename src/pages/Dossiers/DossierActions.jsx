 import { Link } from "react-router-dom";


function DossierActions(){

    return(
    <div className="page">

    <h1>Gestion des dossiers</h1>

    <div className="actions">

        <Link to="/dossiers">
            Liste des dossiers
        </Link>

        <Link to="/add-dossier">
            Ajouter un dossier
        </Link>

    </div>

</div>
    )

}

export default DossierActions;