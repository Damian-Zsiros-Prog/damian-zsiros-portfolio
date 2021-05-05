//Modules
import { useState, useEffect } from "react";
// Db
import db from "../../database";
// Components
import Loader from "../../components/Loader/Loader";
const DatosPersonales = () => {
  const [DatosPersonales, setDatosPersonales] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const getAllDatosPersonales = async () => {
    const response = db.collection("datos-personales").orderBy("key", "asc");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    setDatosPersonales(docData);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllDatosPersonales();
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
                  <tr key={dato.id}>
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
