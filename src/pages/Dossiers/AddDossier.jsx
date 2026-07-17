import api from "../../api/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  diagnostic: yup
    .string()
    .required("Le diagnostic est obligatoire"),

  observations: yup
    .string()
    .required("Les observations sont obligatoires"),

  dateCreation: yup
    .string()
    .required("La date de création est obligatoire"),

  patientId: yup
    .number()
    .typeError("L'id du patient doit être un nombre")
    .positive("L'id doit être supérieur à 0")
    .integer("L'id doit être un entier")
    .required("L'id du patient est obligatoire"),
});

function AddDossier() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      diagnostic: "",
      observations: "",
      dateCreation: "",
      patientId: "",
    },
  });

  function onSubmit(data) {

    api.post("/DossierMedical", data)
      .then((res) => {
        console.log(res.data);

        reset();
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (

  <div className="page">

    <h1>Ajouter un dossier médical</h1>

    <form className="form">

        <div className="form-group">
            <label>Diagnostic</label>
            <input type="text" />
            <p className="error"></p>
        </div>

        <div className="form-group">
            <label>Observations</label>
            <textarea></textarea>
            <p className="error"></p>
        </div>

        <div className="form-group">
            <label>Date de création</label>
            <input type="datetime-local" />
            <p className="error"></p>
        </div>

        <div className="form-group">
            <label>Patient</label>
            <input type="number" />
            <p className="error"></p>
        </div>

        <button className="btn">
            Ajouter
        </button>

    </form>

</div>

  );
}

export default AddDossier;