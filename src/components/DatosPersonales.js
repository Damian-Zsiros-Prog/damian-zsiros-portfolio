import db from "../database";
import React from "react";
import { useState, useEffect } from "react";

import Loader from "./Loader";
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
  }, []);
  return (
    <div>
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
    </div>
  );
};
export default DatosPersonales;
