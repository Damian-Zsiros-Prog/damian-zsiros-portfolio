//Modules
import { useState, useEffect, useContext } from "react";
// Components
import Loader from "../../components/Loader/Loader";
// Context
import DatosPersonalesContext from "../../context/Datos Personales/DatosPersonalesContext";
const DatosPersonales = () => {
  useEffect(() => {
    document.title =
      "Datos Personales - Damian Zsiros Gonzalez - Web Developer - Cartagena de Indias";
  });
  const [IsLoading, setIsLoading] = useState(true);
  const { getDatosPersonales, DatosPersonales } = useContext(
    DatosPersonalesContext
  );

  useEffect(() => {
    getDatosPersonales();
    setInterval(() => {
      setIsLoading(false);
    }, 400);
  }, [getDatosPersonales, DatosPersonales]);

  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <div className="text-left">
          <h1>Datos Personales</h1>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                {DatosPersonales.map(dato => (
                  <tr key={dato.key}>
                    <td>{dato.name}</td>
                    <td>{dato.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
export default DatosPersonales;
