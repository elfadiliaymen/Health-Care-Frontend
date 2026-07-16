import { Link } from "react-router-dom";


function PatientsActions(){

    return(
          <nav>
      <Link to="/patients">patients</Link>
     <Link to="/add-patient">add patients</Link>
    <Link to="/update-patient">update patients</Link>
    </nav>
    )

}

export default PatientsActions;

