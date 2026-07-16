import { useEffect } from "react";
import api from "../../api/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";

const schema = yup.object({
  dateRendezVous: yup
    .string()
    .required("La date du rendez-vous est obligatoire"),

  statut: yup
    .string()
    .required("Le statut est obligatoire"),

  patientId: yup
    .number()
    .typeError("L'ID du patient doit être un nombre")
    .positive("L'ID doit être positif")
    .integer("L'ID doit être un entier")
    .required("L'ID du patient est obligatoire"),

  medecinId: yup
    .number()
    .typeError("L'ID du médecin doit être un nombre")
    .positive("L'ID doit être positif")
    .integer("L'ID doit être un entier")
    .required("L'ID du médecin est obligatoire"),
});

function ModifieRendezVous() {

  const { rendezVousId } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function getRendezVous() {

    api.get(`/RendezVous/${rendezVousId}/consulter`)
      .then((res) => {
        reset({
          dateRendezVous: res.data.dateRendezVous?.slice(0, 16),
          statut: res.data.statut,
          patientId: res.data.patientId,
          medecinId: res.data.medecinId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (rendezVousId) {
      getRendezVous();
    }
  }, [rendezVousId]);

  function onSubmit(data) {

    api.put(`/RendezVous/${rendezVousId}`, data)
      .then((res) => {
        console.log(res.data);

        alert("Rendez-vous modifié avec succès.");

        reset({
          dateRendezVous: "",
          statut: "",
          patientId: "",
          medecinId: "",
        });

        setRendezVousId("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>

      <h1>Modifier un Rendez-vous</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Date du rendez-vous</label>
        <input
          type="datetime-local"
          {...register("dateRendezVous")}
        />
        <p>{errors.dateRendezVous?.message}</p>

        <label>Statut</label>
        <select {...register("statut")}>
          <option value="">-- Choisir un statut --</option>
          <option value="PLANIFIE">Planifié</option>
          <option value="CONFIRME">Confirmé</option>
        </select>
        <p>{errors.statut?.message}</p>

        <label>Patient ID</label>
        <input
          type="number"
          {...register("patientId")}
        />
        <p>{errors.patientId?.message}</p>

        <label>Médecin ID</label>
        <input
          type="number"
          {...register("medecinId")}
        />
        <p>{errors.medecinId?.message}</p>

        <button type="submit">
          Modifier
        </button>

      </form>

    </div>
  );
}

export default ModifieRendezVous;