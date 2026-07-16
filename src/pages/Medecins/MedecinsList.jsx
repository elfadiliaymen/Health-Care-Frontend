import api from "../../api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function MedecinsList(){


    const [medecins , setMedecins] = useState([]);

    useEffect(() => {
      api.get("/medecin").then(res => setMedecins(res.data.content))
      .catch((error) => {
          console.log(error);
        });
    }, [])

    function handleDelete(medecinId) {
      const confirmed = window.confirm("Voulez-vous supprimer ce médecin ?");

      if (!confirmed) {
        return;
      }

      api.delete(`/medecin/${medecinId}`)
        .then(() => {
          setMedecins((currentMedecins) =>
            currentMedecins.filter((medecin) => medecin.id !== medecinId)
          );
        })
        .catch((error) => {
          console.log(error);
          alert("La suppression a échoué.");
        });
    }

    return(
            <div>
      <h1>medecins</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Spécialité</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medecins.length > 0 ? medecins.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.nom}</td>
              <td>{m.specialite}</td>
              <td>{m.email}</td>
              <td>{m.telephone}</td>
              <td>
                <Link to={`/consulter-medecin/${m.id}`}>consulter</Link>{" "}
                <Link to={`/update-medecin/${m.id}`}>modifier</Link>{" "}
                <button type="button" onClick={() => handleDelete(m.id)}>supprimer</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6">Aucun médecin trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    )

}

export default MedecinsList;