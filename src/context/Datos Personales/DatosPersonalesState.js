import React, { useReducer } from "react";
import DatosPersonalesReducer from "./DatosPersonalesReducer";
import DatosPersonalesContext from "./DatosPersonalesContext";

import db from "../../database";

// import { getAllDatosPersonales } from "../../services/DatosPersonalesService";

const DatosPersonalesState = props => {
  const initialState = {
    DatosPersonalesArray: []
  };

  const [DatosPersonalesState, dispatch] = useReducer(
    DatosPersonalesReducer,
    initialState
  );

  const getDatosPersonales = async () => {
    const response = db.collection("datos-personales").orderBy("key", "asc");
    const data = await response.get();
    const DatosPersonales = [];
    data.docs.forEach(item => {
      DatosPersonales.push(item.data());
    });
    dispatch({
      type: "GET_DATOS_PERSONALES",
      payload: DatosPersonales
    });
  };

  return (
    <DatosPersonalesContext.Provider
      value={{
        DatosPersonales: DatosPersonalesState.DatosPersonalesArray,
        getDatosPersonales
      }}
    >
      {props.children}
    </DatosPersonalesContext.Provider>
  );
};

export default DatosPersonalesState;
