import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";

import PatientsActions from "./pages/Patients/PatientsActions";
import PatientsList from "./pages/Patients/PatientsList";
import AddPatient from "./pages/Patients/AddPatient";
import ModifiePatient from "./pages/Patients/ModifiePatient";
import ConsulterPatient from "./pages/Patients/ConsulterPatient";

import MedecinActions from "./pages/Medecins/MedecinActions";
import MedecinsList from "./pages/Medecins/MedecinsList";
import AddMedecin from "./pages/Medecins/AddMedecin";
import ModifieMedecin from "./pages/Medecins/ModifieMedecin";
import ConsulterMedecin from "./pages/Medecins/ConsulterMedecin";

import DossierActions from "./pages/Dossiers/DossierActions";
import DossierList from "./pages/Dossiers/DossiersList";
import AddDossier from "./pages/Dossiers/AddDossier";
import ModifieDossier from "./pages/Dossiers/ModifieDossier";
import ConsulterDossier from "./pages/Dossiers/ConsulterDossier";

import RendezvousActions from "./pages/RendezVous/RendezvousActions";
import RendesVousList from "./pages/RendezVous/RendesVousList";
import AddRendezVous from "./pages/RendezVous/AddRendezVous";
import ModifieRendezVous from "./pages/RendezVous/ModifieRendezVous";
import ConsulterRendezVous from "./pages/RendezVous/ConsulterRendezVous";
import Register from "./auth/Register";

function App() {
  return (
    <div className="app">

      <Header />

      <Routes>

        <Route path="/register" element={<Register />}/>

       
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="/patients-actions"
          element={
            <ProtectedRoute>
              <PatientsActions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <PatientsList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-patient"
          element={
            <ProtectedRoute>
              <AddPatient />
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-patient/:patientId"
          element={
            <ProtectedRoute>
              <ConsulterPatient />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-patient/:patientId"
          element={
            <ProtectedRoute>
              <ModifiePatient />
            </ProtectedRoute>
          }
        />

       
        <Route
          path="/medecins-actions"
          element={
            <ProtectedRoute>
              <MedecinActions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/medecins"
          element={
            <ProtectedRoute>
              <MedecinsList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-medecin"
          element={
            <ProtectedRoute>
              <AddMedecin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-medecin/:medecinId"
          element={
            <ProtectedRoute>
              <ConsulterMedecin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-medecin/:medecinId"
          element={
            <ProtectedRoute>
              <ModifieMedecin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dossiers-actions"
          element={
            <ProtectedRoute>
              <DossierActions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dossiers"
          element={
            <ProtectedRoute>
              <DossierList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-dossier"
          element={
            <ProtectedRoute>
              <AddDossier />
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-dossier/:dossierId"
          element={
            <ProtectedRoute>
              <ConsulterDossier />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-dossier/:dossierId"
          element={
            <ProtectedRoute>
              <ModifieDossier />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rendez-vous-actions"
          element={
            <ProtectedRoute>
              <RendezvousActions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rendez-vous"
          element={
            <ProtectedRoute>
              <RendesVousList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-rendez-vous"
          element={
            <ProtectedRoute>
              <AddRendezVous />
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-rendez-vous/:rendezVousId"
          element={
            <ProtectedRoute>
              <ConsulterRendezVous />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-rendez-vous/:rendezVousId"
          element={
            <ProtectedRoute>
              <ModifieRendezVous />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;