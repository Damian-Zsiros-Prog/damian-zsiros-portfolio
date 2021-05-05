import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import "./Contacto.css";
const Contacto = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const [DataContacto, setDataContacto] = useState({
    nombre: "",
    mensaje: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    window.open(
      "https://api.whatsapp.com/send?phone=573024694613" +
        "&text=" +
        "De " +
        DataContacto.nombre +
        ": " +
        DataContacto.mensaje,
      "_blank"
    );
  };
  const handleInputChange = e => {
    e.preventDefault();
    setDataContacto({
      ...DataContacto,
      [e.target.name]: e.target.value
    });
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 600);
  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div className="text-left container-fluid p-5 contacto">
          <h1 className="text-center">Contacto</h1>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Nombre (*)</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="name"
                name="nombre"
                placeholder="Ingresa tu nombre"
                onChange={e => handleInputChange(e)}
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Mensaje (*)</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="mensaje"
                placeholder="Ingresa tu mensaje"
                onChange={e => handleInputChange(e)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Enviar mensaje al whatsapp
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contacto;
