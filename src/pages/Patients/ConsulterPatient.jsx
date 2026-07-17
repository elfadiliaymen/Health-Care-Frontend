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

    <div className="details-card">

        <div className="details-header">

            <h1>Détails du Patient</h1>

            <Link
                className="btn-edit"
                to={`/update-patient/${patient.id}`}
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
                    {patient.id}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Nom
                </span>

                <span className="value">
                    {patient.nom}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Prénom
                </span>

                <span className="value">
                    {patient.prenom}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Email
                </span>

                <span className="value">
                    {patient.email}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Username
                </span>

                <span className="value">
                    {patient.username}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Téléphone
                </span>

                <span className="value">
                    {patient.telephone}
                </span>

            </div>

            <div className="detail">

                <span className="label">
                    Date de naissance
                </span>

                <span className="value">
                    {patient.dateNaissance}
                </span>

            </div>

        </div>

    </div>

</div>

);
}

export default ConsulterPatient;