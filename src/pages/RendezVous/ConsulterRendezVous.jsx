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

    <div className="details-card">

        <div className="details-header">

            <h1>Détails du Rendez-vous</h1>

            <Link
                className="btn-edit"
                to={`/update-rendez-vous/${rendezVous.id}`}
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
                    {rendezVous.id}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Date
                </span>

                <span className="value">
                    {rendezVous.dateRendezVous}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Statut
                </span>

                <span className="value">
                    {rendezVous.statut}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Patient ID
                </span>

                <span className="value">
                    {rendezVous.patientId}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Médecin ID
                </span>

                <span className="value">
                    {rendezVous.medecinId}
                </span>

            </div>

        </div>

    </div>

</div>

);
}

export default ConsulterRendezVous;