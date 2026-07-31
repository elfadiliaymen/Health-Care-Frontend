import { useEffect, useState } from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function PatientsList() {
  const [patients, setPatients] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 

  useEffect(() => {
    api
      .get("/patient")
      .then((res) => {
        setPatients(res.data.content);
      })
      .catch((error) => {
        setErrorMessage(
  error.response
    ? "Le serveur a renvoyé une erreur."
    : "Impossible de contacter le serveur. Vérifiez votre connexion."
);
      });
  }, []);

  function handleDelete(patientId) {
    const confirmed = window.confirm("Voulez-vous supprimer ce patient ?");

    if (!confirmed) {
      return;
    }

    api
      .delete(`/patient/${patientId}`)
      .then(() => {
        setPatients((currentPatients) =>
          currentPatients.filter((patient) => patient.id !== patientId)
        );
           toast.success("Patient supprimé avec succès !");
      })
      .catch((error) => {
        console.error(error);
        toast.error("La suppression a échoué.");
      });
  }

 

const filteredPatients = patients.filter((patient) => {
  const fullName = patient.nom + " " + patient.prenom;
  return fullName.toLowerCase().includes(searchTerm.toLowerCase());
});

const sortedPatients = [...filteredPatients].sort((a, b) => {
  const comparison = `${a.nom} ${a.prenom}`.localeCompare(`${b.nom} ${b.prenom}`);
  return sortOrder === "asc" ? comparison : -comparison;
});

return (
    <>
            <div className="page">

    <div className="page-header">

        <h1>Liste des Patients</h1>

        <Link className="btn-primary" to="/add-patient">
            + Ajouter
        </Link>
        <button
  className={sortOrder === "asc" ? "btn-primary" : "btn-delete"}
  onClick={() => setSortOrder("asc")}
>
  A → Z
</button>
<button
  className={sortOrder === "desc" ? "btn-primary" : "btn-delete"}
  onClick={() => setSortOrder("desc")}
>
  Z → A
</button>

    </div>

    <input
  type="text"
  placeholder="Rechercher un patient..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

    <div className="table-container">

        <table className="table">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {
                    errorMessage ? (
    <tr>
        <td colSpan="6">{errorMessage}</td>
    </tr>
) : sortedPatients.length  > 0 ? (

                    sortedPatients.map((patient) => (

                        <tr key={patient.id}>

                            <td>{patient.id}</td>

                            <td>{patient.nom}</td>

                            <td>{patient.prenom}</td>

                            <td>{patient.email}</td>

                            <td>{patient.telephone}</td>

                            <td className="table-actions">

                                <Link
                                    className="btn-view"
                                    to={`/consulter-patient/${patient.id}`}
                                >
                                    Consulter
                                </Link>

                                <Link
                                    className="btn-edit"
                                    to={`/update-patient/${patient.id}`}
                                >
                                    Modifier
                                </Link>

                                <button
                                    className="btn-delete"
                                    onClick={() => handleDelete(patient.id)}
                                >
                                    Supprimer
                                </button>

                            </td>

                        </tr>

                    ))

                ) : (

                    <tr>

                        <td colSpan="6">
                            Aucun patient trouvé.
                        </td>

                    </tr>

                )}

            </tbody>

        </table>

    </div>

</div>
        
</>)
}

export default PatientsList;