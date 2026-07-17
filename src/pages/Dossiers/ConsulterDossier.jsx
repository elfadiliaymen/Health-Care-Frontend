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
   <div className="page">

    <h1>Détails du dossier</h1>

    <div className="details-card">

        <div className="detail-row">
            <span className="detail-title">ID</span>
            <span>{dossier.id}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Diagnostic</span>
            <span>{dossier.diagnostic}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Observations</span>
            <span>{dossier.observations}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Date</span>
            <span>{dossier.dateCreation}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Patient ID</span>
            <span>{dossier.patientId}</span>
        </div>

    </div>

    <Link
        className="btn"
        to={`/update-dossier/${dossier.id}`}
    >
        Modifier
    </Link>

</div>
  );
}

export default ConsulterDossier;