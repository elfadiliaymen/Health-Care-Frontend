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

    <div className="details-card">

        <div className="details-header">

            <h1>Détails du Dossier Médical</h1>

            <Link
                className="btn-edit"
                to={`/update-dossier/${dossier.id}`}
            >
                Modifier
            </Link>

        </div>

        <div className="details-grid">

            <div className="detail">

                <span className="label">
                    ID
                </span>

                <span className="value">
                    {dossier.id}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Diagnostic
                </span>

                <span className="value">
                    {dossier.diagnostic}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Observations
                </span>

                <span className="value">
                    {dossier.observations}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Date de création
                </span>

                <span className="value">
                    {dossier.dateCreation}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Patient ID
                </span>

                <span className="value">
                    {dossier.patientId}
                </span>

            </div>

        </div>

    </div>

</div>

);
}

export default ConsulterDossier;