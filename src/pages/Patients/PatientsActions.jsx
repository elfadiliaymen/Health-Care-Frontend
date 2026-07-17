import { Link } from "react-router-dom";


function PatientsActions(){

    return(
     <div className="page">

    <h1>Gestion des patients</h1>

    <div className="actions">

        <Link to="/patients">
            Liste des patients
        </Link>

        <Link to="/add-patient">
            Ajouter un patient
        </Link>

    </div>

</div>
    )

}

export default PatientsActions;

