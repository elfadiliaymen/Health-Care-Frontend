import { useState , useEffect } from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";


function RendesVousList(){

    const[rendesVous , setRendezVous] = useState([]);

     useEffect(() => {
        api.get("/RendezVous").then(res => setRendezVous(res.data.content))
        .catch((error) => {
                console.log(error);
            });
    }, [])

    function handleDelete(rendezVousId) {
      const confirmed = window.confirm("Voulez-vous supprimer ce rendez-vous ?");

      if (!confirmed) {
        return;
      }

      api.delete(`/RendezVous/${rendezVousId}`)
        .then(() => {
          setRendezVous((currentRendezVous) =>
            currentRendezVous.filter((rendezVous) => rendezVous.id !== rendezVousId)
          );
        })
        .catch((error) => {
          console.log(error);
          alert("La suppression a échoué.");
        });
    }


     return(

          <div>
      <h1>rendezVous : </h1>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Statut</th>
            <th>Patient ID</th>
            <th>Médecin ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rendesVous.length > 0 ? rendesVous.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.dateRendezVous}</td>
              <td>{r.statut}</td>
              <td>{r.patientId}</td>
              <td>{r.medecinId}</td>
              <td>
                <Link to={`/consulter-rendez-vous/${r.id}`}>consulter</Link>{" "}
                <Link to={`/update-rendez-vous/${r.id}`}>modifier</Link>{" "}
                <button type="button" onClick={() => handleDelete(r.id)}>supprimer</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6">Aucun rendez-vous trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>


     );

}

export default RendesVousList;