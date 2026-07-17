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

    <h1>Détails du médecin</h1>

    <div className="details-card">

        <div className="detail-row">
            <span className="detail-title">ID</span>
            <span>{medecin.id}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Nom</span>
            <span>{medecin.nom}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Prénom</span>
            <span>{medecin.prenom}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Spécialité</span>
            <span>{medecin.specialite}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Email</span>
            <span>{medecin.email}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Username</span>
            <span>{medecin.username}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Password</span>
            <span>{medecin.password}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Role</span>
            <span>{medecin.role}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Téléphone</span>
            <span>{medecin.telephone}</span>
        </div>

    </div>

    <Link className="btn" to={`/update-medecin/${medecin.id}`}>
        Modifier
    </Link>

</div>
  );
}

export default ConsulterMedecin;