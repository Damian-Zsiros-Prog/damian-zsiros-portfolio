//Modules
import { useState, useEffect } from "react";
// Components
import Loader from "../../components/Loader/Loader";
// Services
import { getAllDatosPersonales } from "../../services/DatosPersonalesService";
const DatosPersonales = () => {
  const [DatosPersonales, setDatosPersonales] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const getDatosPersonales = async () => {
    const data = await getAllDatosPersonales();
    setDatosPersonales(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getDatosPersonales();
  }, [DatosPersonales]);
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
