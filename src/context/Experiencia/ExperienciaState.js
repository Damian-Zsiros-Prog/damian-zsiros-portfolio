import React, { useReducer } from "react";
import ExperienciaReducer from "./ExperienciaReducer";
import ExperienciaContext from "./ExperienciaContext";

import db from "../../database";

const HabilidadesState = props => {
  const initialState = {
    ExperienciaArray: []
  };

  const [ExperienciaState, dispatch] = useReducer(
    ExperienciaReducer,
    initialState
  );

  const getExperiencia = async () => {
    const response = db.collection("experiencia");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    dispatch({
      type: "GET_EXPERIENCIA",
      payload: docData
    });
  };

  return (
    <ExperienciaContext.Provider
      value={{
        HabilidadesState: ExperienciaState.ExperienciaArray,
        getExperiencia
      }}
    >
      {props.children}
    </ExperienciaContext.Provider>
  );
};

export default HabilidadesState;
