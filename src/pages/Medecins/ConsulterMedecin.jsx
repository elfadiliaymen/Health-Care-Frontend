import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";

function ConsulterMedecin() {
  const { medecinId } = useParams();
  const [medecin, setMedecin] = useState(null);

  useEffect(() => {
    api.get(`/medecin/${medecinId}/consulter`)
      .then((res) => setMedecin(res.data))
      .catch((error) => console.log(error));
  }, [medecinId]);

  if (!medecin) {
    return <div>Chargement...</div>;
  }

  return (

<div className="page">

    <div className="details-card">

        <div className="details-header">

            <h1>Détails du Médecin</h1>

            <Link
                className="btn-edit"
                to={`/update-medecin/${medecin.id}`}
            >
                Modifier
            </Link>

        </div>

        <div className="details-grid">

            <div className="detail">
                <span className="label">ID</span>
                <span className="value">{medecin.id}</span>
            </div>

            <div className="detail">
                <span className="label">Nom</span>
                <span className="value">{medecin.nom}</span>
            </div>

            <div className="detail">
                <span className="label">Spécialité</span>
                <span className="value">{medecin.specialite}</span>
            </div>

            <div className="detail">
                <span className="label">Email</span>
                <span className="value">{medecin.email}</span>
            </div>

            <div className="detail">
                <span className="label">Username</span>
                <span className="value">{medecin.username}</span>
            </div>

            <div className="detail">
                <span className="label">Téléphone</span>
                <span className="value">{medecin.telephone}</span>
            </div>

            <div className="detail">
                <span className="label">Rôle</span>
                <span className="value">{medecin.role}</span>
            </div>

        </div>

    </div>

</div>

);
}

export default ConsulterMedecin;