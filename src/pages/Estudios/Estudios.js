import "./Estudios.css";
import Loader from "../../components/Loader/Loader";

import EstudiosContext from "../../context/Estudios/EstudiosContext";

import { useState, useEffect, useContext } from "react";

const Estudios = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const { getEstudios, Estudios, Cursos, getCursos } =
    useContext(EstudiosContext);

  useEffect(() => {
    document.title =
      "Estudios - Damian Zsiros Gonzalez - Web Developer - Cartagena de Indias";
  }, []);
  useEffect(() => {
    getEstudios();
    getCursos();
    setInterval(() => {
      setIsLoading(false);
    }, 400);
  }, [getEstudios, getCursos]);

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
                  <th>Certificado</th>
                </tr>
              </thead>
              <tbody>
                {Estudios.map(dato => (
                  <tr key={dato.id}>
                    <td>
                      {dato.fechaInicio} - {dato.fechaFin}
                    </td>
                    <td>
                      {dato.lugar && dato.lugar !== "" ? (
                        <a
                          href={dato.link_lugar}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {dato.lugar}
                        </a>
                      ) : (
                        <a
                          href={dato.link_lugar}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {dato.lugar}
                        </a>
                      )}
                    </td>
                    <td>{dato.titulo}</td>
                    {dato.link_certificado && dato.link_certificado !== "" ? (
                      <td>
                        <a
                          href={dato.link_certificado}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver
                        </a>
                      </td>
                    ) : (
                      <td>En proceso</td>
                    )}
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
                  <th>Tiempo</th>
                  <th>Tipo</th>
                  <th>Certificado</th>
                </tr>
              </thead>
              <tbody>
                {Cursos.map(dato => (
                  <tr key={dato.id}>
                    <td>{dato.año}</td>
                    <td>{dato.curso}</td>
                    <td>
                      {dato.lugar ? (
                        <a
                          href={dato.link_lugar}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {dato.lugar}
                        </a>
                      ) : (
                        dato.link_lugar
                      )}
                    </td>
                    <td>{dato.horas}</td>
                    <td>{dato.tipo}</td>
                    {dato.link_certificado && dato.link_certificado !== "" ? (
                      <td>
                        <a
                          href={dato.link_certificado}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver
                        </a>
                      </td>
                    ) : (
                      <td>En proceso</td>
                    )}
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
