import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";

function ConsulterDossier() {
  const { dossierId } = useParams();
  const [dossier, setDossier] = useState(null);

  useEffect(() => {
    api.get(`/DossierMedical/${dossierId}/consulter`)
      .then((res) => setDossier(res.data))
      .catch((error) => console.log(error));
  }, [dossierId]);

  if (!dossier) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Détails du dossier médical</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <tbody>
          <tr><th>ID</th><td>{dossier.id}</td></tr>
          <tr><th>Diagnostic</th><td>{dossier.diagnostic}</td></tr>
          <tr><th>Observations</th><td>{dossier.observations}</td></tr>
          <tr><th>Date de création</th><td>{dossier.dateCreation}</td></tr>
          <tr><th>Patient ID</th><td>{dossier.patientId}</td></tr>
        </tbody>
      </table>
      <p>
        <Link to={`/update-dossier/${dossier.id}`}>modifier</Link>
      </p>
    </div>
  );
}

export default ConsulterDossier;