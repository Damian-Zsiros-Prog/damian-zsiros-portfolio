import db from "../../database";
import Loader from "../../components/Loader/Loader";
import { useState, useEffect, useContext } from "react";

// Context
import ExperienciaContext from "../../context/Experiencia/ExperienciaContext";
const Experiencia = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const { Experiencia, getExperiencia } = useContext(ExperienciaContext);

  useEffect(() => {
    getExperiencia();
    setInterval(() => {
      setIsLoading(false);
    }, 400);
  }, [getExperiencia]);
  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div className="text-left">
          <h1>Experiencia</h1>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Puesto</th>
                  <th scope="col">Tareas puesto</th>
                </tr>
              </thead>
              <tbody>
                {Experiencia.map(dato => (
                  <tr key={dato.id}>
                    <td>
                      {dato.fechaInicio} - {dato.fechafin}
                    </td>
                    <td>{dato.empresa}</td>
                    <td>{dato.puesto}</td>
                    <td>{dato.tareasPuesto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiencia;
