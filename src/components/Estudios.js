import "./Estudios.css";
import db from "../database";
import Loader from "./Loader";

import { useState, useEffect } from "react";

const Estudios = () => {
  const [Estudios, setEstudios] = useState([]);
  const [Cursos, setCursos] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const getAllHabilidades = async () => {
    const response = db.collection("estudios");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    setEstudios(docData);
  };
  const getAllCursos = async () => {
    const response = db.collection("cursos");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    setCursos(docData);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllHabilidades();
    getAllCursos();
  }, []);

  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div className="text-left">
          <h1>Estudios</h1>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Lugar</th>
                  <th>Titulo</th>
                </tr>
              </thead>
              <tbody>
                {Estudios.map(dato => (
                  <tr key={dato.id}>
                    <td>
                      {dato.fechaInicio} - {dato.fechaFin}
                    </td>
                    <td>{dato.lugar}</td>
                    <td>{dato.titulo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h1>Cursos</h1>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Curso</th>
                  <th>Lugar</th>
                  <th>Horas</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {Cursos.map(dato => (
                  <tr key={dato.id}>
                    <td>{dato.año}</td>
                    <td>{dato.curso}</td>
                    <td>{dato.lugar}</td>
                    <td>{dato.horas}</td>
                    <td>{dato.tipo}</td>
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

export default Estudios;
