 import { Link } from "react-router-dom";


function MedecinActions(){

    return(
          <nav>
      <Link to="/medecins">medecins</Link>
     <Link to="/add-medecin">add medecins</Link>
    <Link to="/update-medecin">update medecins</Link>
    </nav>
    )


}

export default MedecinActions;