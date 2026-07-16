import { useEffect, useState } from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";




function DossierList(){

    const [dossier , setDossiers] = useState([]);

    useEffect(() => {

        api.get("/DossierMedical").then(res => setDossiers(res.data.content))
        .catch((error) => {
                console.log(error);
            });

    }, [])

    function handleDelete(dossierId) {
      const confirmed = window.confirm("Voulez-vous supprimer ce dossier ?");

      if (!confirmed) {
        return;
      }

      api.delete(`/DossierMedical/${dossierId}`)
        .then(() => {
          setDossiers((currentDossiers) =>
            currentDossiers.filter((item) => item.id !== dossierId)
          );
        })
        .catch((error) => {
          console.log(error);
          alert("La suppression a échoué.");
        });
    }

    return(
     <div>
      <h1>dossiers</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Diagnostic</th>
            <th>Observations</th>
            <th>Patient ID</th>
            <th>Date de création</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dossier.length > 0 ? dossier.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.diagnostic}</td>
              <td>{d.observations}</td>
              <td>{d.patientId}</td>
              <td>{d.dateCreation}</td>
              <td>
                <Link to={`/consulter-dossier/${d.id}`}>consulter</Link>{" "}
                <Link to={`/update-dossier/${d.id}`}>modifier</Link>{" "}
                <button type="button" onClick={() => handleDelete(d.id)}>supprimer</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6">Aucun dossier trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    )
}

export default DossierList;