 import { Link } from "react-router-dom";


function RendezvousActions(){

    return(
          <nav>
      <Link to="/rendez-vous">rendez-vous</Link>
     <Link to="/add-rendez-vous">add rendez-vous</Link>
    <Link to="/update-rendez-vous">update rendez-vous</Link>
    </nav>
    )


}

export default RendezvousActions;