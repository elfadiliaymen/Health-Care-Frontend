import api from "../../api/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup.string().required("Le nom est obligatoire"),

  prenom: yup.string().required("Le prénom est obligatoire"),

  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est obligatoire"),

  username: yup
    .string()
    .required("Le username est obligatoire"),

  password: yup
    .string()
    .min(6, "Minimum 6 caractères")
    .required("Le mot de passe est obligatoire"),

  telephone: yup
    .string()
    .required("Le téléphone est obligatoire"),

  dateNaissance: yup
    .string()
    .required("La date de naissance est obligatoire"),
});

function ModifiePatient() {

  const [patientId, setPatientId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function getPatient() {

    api.get(`/patient/${patientId}/consulter`)
      .then((res) => {

        console.log(res.data);

        // Remplit automatiquement le formulaire
        reset(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onSubmit(data) {

    api.put(`/patient/${patientId}`, data)
      .then((res) => {

        console.log(res.data);

        alert("Patient modifié avec succès");

      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <div>

      <h1>Modifier Patient</h1>

      <div>

        <label>ID du patient</label>

        <input
          type="number"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />

        <button type="button" onClick={getPatient}>
          Charger
        </button>

      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Nom</label>

          <input
            type="text"
            {...register("nom")}
          />

          <p>{errors.nom?.message}</p>
        </div>

        <div>
          <label>Prénom</label>

          <input
            type="text"
            {...register("prenom")}
          />

          <p>{errors.prenom?.message}</p>
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            {...register("email")}
          />

          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label>Username</label>

          <input
            type="text"
            {...register("username")}
          />

          <p>{errors.username?.message}</p>
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            {...register("password")}
          />

          <p>{errors.password?.message}</p>
        </div>

        <div>
          <label>Téléphone</label>

          <input
            type="text"
            {...register("telephone")}
          />

          <p>{errors.telephone?.message}</p>
        </div>

        <div>
          <label>Date de naissance</label>

          <input
            type="date"
            {...register("dateNaissance")}
          />

          <p>{errors.dateNaissance?.message}</p>
        </div>

        <button type="submit">
          Modifier
        </button>

      </form>

    </div>
  );
}

export default ModifiePatient;