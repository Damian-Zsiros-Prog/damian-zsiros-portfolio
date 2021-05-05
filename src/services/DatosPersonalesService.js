// Db
import db from "../database";
export const getAllDatosPersonales = async () => {
  const response = db.collection("datos-personales").orderBy("key", "asc");
  const data = await response.get();
  const DatosPersonales = [];
  data.docs.forEach(item => {
    DatosPersonales.push(item.data());
  });
  return DatosPersonales;
};
