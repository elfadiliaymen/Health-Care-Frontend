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
          <div className="page">

    <h1>Liste des médecins</h1>

    <div className="table-container">

        <table className="table">

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

                {medecins.map((m) => (

                    <tr key={m.id}>

                        <td>{m.id}</td>
                        <td>{m.nom}</td>
                        <td>{m.specialite}</td>
                        <td>{m.email}</td>
                        <td>{m.telephone}</td>

                        <td>

                            <Link to={`/consulter-medecin/${m.id}`}>
                                Consulter
                            </Link>

                            <Link to={`/update-medecin/${m.id}`}>
                                Modifier
                            </Link>

                            <button
                                className="btn"
                                onClick={() => handleDelete(m.id)}
                            >
                                Supprimer
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    </div>

</div>
    )

}

export default MedecinsList;