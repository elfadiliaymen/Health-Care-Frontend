import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="dashboard">

      <h1>Dashboard</h1>

      <div className="dashboard-links">

        <Link to="/patients-actions">
          Gestion des Patients
        </Link>

        <Link to="/medecins-actions">
          Gestion des Médecins
        </Link>

        <Link to="/dossiers-actions">
          Gestion des Dossiers Médicaux
        </Link>

        <Link to="/rendez-vous-actions">
          Gestion des Rendez-vous
        </Link>

      </div>

    </main>
  );
}

export default Dashboard;