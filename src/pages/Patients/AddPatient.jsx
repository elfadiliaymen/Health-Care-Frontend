import api from "../../api/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({

  nom: yup
    .string()
    .required("Le nom est obligatoire"),

  prenom: yup
    .string()
    .required("Le prénom est obligatoire"),

  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est obligatoire"),

  username: yup
    .string()
    .min(3, "Le username doit contenir au moins 3 caractères")
    .required("Le username est obligatoire"),

  password: yup
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .required("Le mot de passe est obligatoire"),

  telephone: yup
    .string()
    .required("Le téléphone est obligatoire"),

  dateNaissance: yup
    .date()
    .required("La date de naissance est obligatoire")

});

function AddPatient() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {

    api.post("/patient", data)
      .then((res) => {
        console.log(res.data);

        alert("Patient ajouté avec succès !");

        reset();
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (

    <div>

      <h1>Ajouter un patient</h1>

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
          Ajouter
        </button>

      </form>

    </div>

  );
}

export default AddPatient;