 import { Link } from "react-router-dom";


function RendezvousActions(){

    return(
         <div className="page">

    <h1>Gestion des rendez-vous</h1>

    <div className="actions">

        <Link to="/rendez-vous">
            Liste des rendez-vous
        </Link>

        <Link to="/add-rendez-vous">
            Ajouter un rendez-vous
        </Link>

    </div>

</div>
    )


}

export default RendezvousActions;