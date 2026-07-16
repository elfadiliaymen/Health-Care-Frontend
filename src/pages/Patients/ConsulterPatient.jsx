import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";

function ConsulterPatient() {
  const { patientId } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    api.get(`/patient/${patientId}/consulter`)
      .then((res) => setPatient(res.data))
      .catch((error) => console.log(error));
  }, [patientId]);

  if (!patient) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Détails du patient</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <tbody>
          <tr><th>ID</th><td>{patient.id}</td></tr>
          <tr><th>Nom</th><td>{patient.nom}</td></tr>
          <tr><th>Prénom</th><td>{patient.prenom}</td></tr>
          <tr><th>Email</th><td>{patient.email}</td></tr>
          <tr><th>Username</th><td>{patient.username}</td></tr>
          <tr><th>Password</th><td>{patient.password}</td></tr>
          <tr><th>Rôle</th><td>{patient.role}</td></tr>
          <tr><th>Téléphone</th><td>{patient.telephone}</td></tr>
          <tr><th>Date de naissance</th><td>{patient.dateNaissance}</td></tr>
        </tbody>
      </table>
      <p>
        <Link to={`/update-patient/${patient.id}`}>modifier</Link>
      </p>
    </div>
  );
}

export default ConsulterPatient;