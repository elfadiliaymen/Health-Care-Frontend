import { useEffect, useState } from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";

function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api
      .get("/patient")
      .then((res) => {
        setPatients(res.data.content);
      })
      .catch((error) => {
        console.error(error);
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
      })
      .catch((error) => {
        console.error(error);
        alert("La suppression a échoué.");
      });
  }

  return (
    <div className="container">
      <h1>Liste des Patients</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
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
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.nom}</td>
                <td>{patient.prenom}</td>
                <td>{patient.email}</td>
                <td>{patient.telephone}</td>
                <td>
                  <Link to={`/consulter-patient/${patient.id}`}>consulter</Link>{" "}
                  <Link to={`/update-patient/${patient.id}`}>modifier</Link>
                  {" "}
                  <button type="button" onClick={() => handleDelete(patient.id)}>
                    supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Aucun patient trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientsList;