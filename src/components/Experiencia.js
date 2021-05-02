import db from "../database";
import Loader from "./Loader";
import { useState, useEffect } from "react";
const Experiencia = () => {
  const [Experiencia, setExperiencia] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const getAllCursos = async () => {
    const response = db.collection("experiencia");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    setExperiencia(docData);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllCursos();
  }, []);
  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div className="text-left">
          <h1>Experiencia</h1>
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
                    {dato.fechaInicio} - {dato.fechaFin}
                  </td>
                  <td>{dato.empresa}</td>
                  <td>{dato.puesto}</td>
                  <td>{dato.tareasPuesto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Experiencia;
