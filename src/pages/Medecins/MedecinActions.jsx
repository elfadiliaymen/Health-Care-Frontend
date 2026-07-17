 import { Link } from "react-router-dom";


function MedecinActions(){

    return(
          <div className="page">

    <h1>Gestion des médecins</h1>

    <div className="actions">

        <Link to="/medecins">
            Liste des médecins
        </Link>

        <Link to="/add-medecin">
            Ajouter un médecin
        </Link>

    </div>

</div>
    )


}

export default MedecinActions;