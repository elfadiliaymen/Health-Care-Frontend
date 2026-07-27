import { Routes, Route , useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
import RoleGuard from "./Components/RoleGuard";
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
import Login from "./auth/Login";

function App() {

  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";



  return (
    <div className="app">

{!hideLayout && <Header />}

      <Routes>

        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />

       
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
              <RoleGuard allowedRoles={["ADMIN"]}>
                <PatientsActions />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <PatientsList />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-patient"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <AddPatient />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-patient/:patientId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT", "MEDECIN"]}>
                <ConsulterPatient />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-patient/:patientId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT"]}>
                <ModifiePatient />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

       
        <Route
          path="/medecins-actions"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <MedecinActions />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/medecins"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <MedecinsList />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-medecin"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <AddMedecin />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-medecin/:medecinId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT", "MEDECIN"]}>
                <ConsulterMedecin />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-medecin/:medecinId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "MEDECIN"]}>
                <ModifieMedecin />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dossiers-actions"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <DossierActions />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dossiers"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <DossierList />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-dossier"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <AddDossier />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-dossier/:dossierId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT", "MEDECIN"]}>
                <ConsulterDossier />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-dossier/:dossierId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <ModifieDossier />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/rendez-vous-actions"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT", "MEDECIN"]}>
                <RendezvousActions />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/rendez-vous"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT", "MEDECIN"]}>
                <RendesVousList />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-rendez-vous"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT"]}>
                <AddRendezVous />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/consulter-rendez-vous/:rendezVousId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT", "MEDECIN"]}>
                <ConsulterRendezVous />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-rendez-vous/:rendezVousId"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN", "PATIENT"]}>
                <ModifieRendezVous />
              </RoleGuard>
            </ProtectedRoute>
          }
        />

      </Routes>

{!hideLayout &&  <Footer />}
     

    </div>
  );
}

export default App;