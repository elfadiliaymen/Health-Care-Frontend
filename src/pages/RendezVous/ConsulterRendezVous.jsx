import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";

function ConsulterRendezVous() {
  const { rendezVousId } = useParams();
  const [rendezVous, setRendezVous] = useState(null);

  useEffect(() => {
    api.get(`/RendezVous/${rendezVousId}/consulter`)
      .then((res) => setRendezVous(res.data))
      .catch((error) => console.log(error));
  }, [rendezVousId]);

  if (!rendezVous) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Détails du rendez-vous</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <tbody>
          <tr><th>ID</th><td>{rendezVous.id}</td></tr>
          <tr><th>Date du rendez-vous</th><td>{rendezVous.dateRendezVous}</td></tr>
          <tr><th>Statut</th><td>{rendezVous.statut}</td></tr>
          <tr><th>Patient ID</th><td>{rendezVous.patientId}</td></tr>
          <tr><th>Médecin ID</th><td>{rendezVous.medecinId}</td></tr>
        </tbody>
      </table>
      <p>
        <Link to={`/update-rendez-vous/${rendezVous.id}`}>modifier</Link>
      </p>
    </div>
  );
}

export default ConsulterRendezVous;