import { Routes, Route , Link } from "react-router-dom";
import PatientsList from "./pages/Patients/PatientsList";
import MedecinsList from "./pages/Medecins/MedecinsList";
import DossierList from "./pages/Dossiers/DossiersList";
import RendesVousList from "./pages/RendezVous/RendesVousList";
import AddDossier from "./pages/Dossiers/AddDossier";
import AddPatient from "./pages/Patients/addPatient";
import AddMedecin from "./pages/Medecins/AddMedecin";
import AddRendezVous from "./pages/RendezVous/AddRendezVous";
import ModifiePatient from "./pages/Patients/ModifiePatient";
import NavBar from "./Components/NavBar";
import PatientsActions from "./pages/Patients/PatientsActions";
import MedecinActions from "./pages/Medecins/MedecinActions";
import DossierActions from "./pages/Dossiers/DossierActions";
import RendezvousActions from "./pages/RendezVous/RendezvousActions";
import ModifieMedecin from "./pages/Medecins/ModifieMedecin";
import ModifieDossier from "./pages/Dossiers/ModifieDossier";
import ModifieRendezVous from "./pages/RendezVous/ModifieRendezVous";


function App() {
  

  return (
    <>
    <NavBar />
   
    <Routes>
       <Route path="/patients-actions" element={<PatientsActions />}/>
       <Route path="/medecins-actions" element={<MedecinActions />}/>
       <Route path="/dossiers-actions" element={<DossierActions />}/>
       <Route path="/rendez-vous-actions" element={<RendezvousActions />}/>

      <Route path = "/patients" element={<PatientsList />}/>
      <Route path ="/add-patient" element = {<AddPatient />}/>
      <Route path ="/update-patient" element = {<ModifiePatient />}/>

      <Route path="/medecins" element={<MedecinsList />}/>
      <Route path="/add-medecin" element ={<AddMedecin />}/>
      <Route path="/update-medecin" element ={<ModifieMedecin />}/>
      
      <Route path="/Dossiers" element={<DossierList />}/>
       <Route path="/add-Dossier" element ={<AddDossier />}/>
      <Route path="/update" element ={<ModifieDossier />}/>
     

<Route path="/rendez-vous" element={<RendesVousList />}/>
      <Route path="/add-rendez-vous" element ={<AddRendezVous />}/>
      <Route path="/update-rendez-vous" element ={<ModifieRendezVous />}/>
  
    </Routes>
     
    
    </>
  )
}

export default App
