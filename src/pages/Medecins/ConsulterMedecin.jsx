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
    <div>
      <h1>Détails du médecin</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <tbody>
          <tr><th>ID</th><td>{medecin.id}</td></tr>
          <tr><th>Nom</th><td>{medecin.nom}</td></tr>
          <tr><th>Prénom</th><td>{medecin.prenom}</td></tr>
          <tr><th>Spécialité</th><td>{medecin.specialite}</td></tr>
          <tr><th>Email</th><td>{medecin.email}</td></tr>
          <tr><th>Username</th><td>{medecin.username}</td></tr>
          <tr><th>Password</th><td>{medecin.password}</td></tr>
          <tr><th>Rôle</th><td>{medecin.role}</td></tr>
          <tr><th>Téléphone</th><td>{medecin.telephone}</td></tr>
        </tbody>
      </table>
      <p>
        <Link to={`/update-medecin/${medecin.id}`}>modifier</Link>
      </p>
    </div>
  );
}

export default ConsulterMedecin;