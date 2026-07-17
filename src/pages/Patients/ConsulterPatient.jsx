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
    <div className="page">

    <h1>Détails du patient</h1>

    <div className="details-card">

        <div className="detail-row">
            <span className="detail-title">ID</span>
            <span>{patient.id}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Nom</span>
            <span>{patient.nom}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Prénom</span>
            <span>{patient.prenom}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Email</span>
            <span>{patient.email}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Username</span>
            <span>{patient.username}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Password</span>
            <span>{patient.password}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Rôle</span>
            <span>{patient.role}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Téléphone</span>
            <span>{patient.telephone}</span>
        </div>

        <div className="detail-row">
            <span className="detail-title">Date de naissance</span>
            <span>{patient.dateNaissance}</span>
        </div>

    </div>

    <Link
        className="btn"
        to={`/update-patient/${patient.id}`}
    >
        Modifier
    </Link>

</div>
  );
}

export default ConsulterPatient;