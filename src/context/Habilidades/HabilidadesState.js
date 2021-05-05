import React, { useReducer } from "react";
import HabilidadesReducer from "./HabilidadesReducer";
import HabilidadesContext from "./HabilidadesContext";

import db from "../../database";

const HabilidadesState = props => {
  const initialState = {
    HabilidadesArray: []
  };

  const [HabilidadesState, dispatch] = useReducer(
    HabilidadesReducer,
    initialState
  );

  const getHabilidades = async () => {
    const response = db.collection("habilidades").orderBy("percentage", "desc");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    dispatch({
      type: "GET_HABILIDADES",
      payload: docData
    });
  };

  return (
    <HabilidadesContext.Provider
      value={{
        HabilidadesState: HabilidadesState.HabilidadesArray,
        getHabilidades
      }}
    >
      {props.children}
    </HabilidadesContext.Provider>
  );
};

export default HabilidadesState;
