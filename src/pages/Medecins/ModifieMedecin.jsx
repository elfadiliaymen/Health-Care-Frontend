import api from "../../api/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup
    .string()
    .required("Le nom est obligatoire"),

  specialite: yup
    .string()
    .required("La spécialité est obligatoire"),

  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est obligatoire"),

  telephone: yup
    .string()
    .required("Le téléphone est obligatoire")
    .matches(/^[0-9]+$/, "Le téléphone doit contenir uniquement des chiffres"),
});

function ModifieMedecin() {
  const [medecinId, setMedecinId] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nom: "",
      specialite: "",
      email: "",
      telephone: "",
    },
  });

  function getMedecin() {
    if (!medecinId) {
      alert("Veuillez saisir un ID.");
      return;
    }

    api
      .get(`/medecin/${medecinId}/consulter`)
      .then((res) => {
        console.log(res.data);

        reset({
          nom: res.data.nom,
          specialite: res.data.specialite,
          email: res.data.email,
          telephone: res.data.telephone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onSubmit(data) {
    api
      .put(`/medecin/${medecinId}`, data)
      .then((res) => {
        console.log(res.data);
        alert("Médecin modifié avec succès !");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>Modifier Médecin</h1>

      <div>
        <label>ID du médecin :</label>
        <input
          type="number"
          value={medecinId}
          onChange={(e) => setMedecinId(e.target.value)}
        />

        <button type="button" onClick={getMedecin}>
          Charger
        </button>
      </div>

      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Nom</label>
          <input type="text" {...register("nom")} />
          <p>{errors.nom?.message}</p>
        </div>

        <div>
          <label>Spécialité</label>
          <input type="text" {...register("specialite")} />
          <p>{errors.specialite?.message}</p>
        </div>

        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label>Téléphone</label>
          <input type="text" {...register("telephone")} />
          <p>{errors.telephone?.message}</p>
        </div>

        <button type="submit">
          Modifier
        </button>

      </form>
    </>
  );
}

export default ModifieMedecin;