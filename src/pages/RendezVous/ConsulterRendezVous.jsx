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
   <div className="page">

    <h1>Détails du rendez-vous</h1>

    <div className="details-card">

        <div className="detail-row">
            <span className="detail-title">ID</span>
            <span>{rendezVous.id}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Date du rendez-vous</span>
            <span>{rendezVous.dateRendezVous}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Statut</span>
            <span>{rendezVous.statut}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Patient ID</span>
            <span>{rendezVous.patientId}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Médecin ID</span>
            <span>{rendezVous.medecinId}</span>
        </div>

    </div>

    <Link
        className="btn"
        to={`/update-rendez-vous/${rendezVous.id}`}
    >
        Modifier
    </Link>

</div>
  );
}

export default ConsulterRendezVous;