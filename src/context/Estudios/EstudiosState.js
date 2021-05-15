import React, { useReducer } from "react";
import { EstudiosReducer, CursosReducer } from "../Estudios/EstudiosReducer";
import EstudiosContext from "./EstudiosContext";

import db from "../../database";

// import { getAllDatosPersonales } from "../../services/DatosPersonalesService";

const EstudiosState = props => {
  const initialState = {
    EstudiosArray: []
  };
  const cursosInitialState = {
    CursosArray: []
  };

  const [EstudiosState, dispatch] = useReducer(EstudiosReducer, initialState);
  const [CursosState, dispatchCursos] = useReducer(
    CursosReducer,
    cursosInitialState
  );

  const getEstudios = async () => {
    const response = db.collection("estudios");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    dispatch({
      type: "GET_ESTUDIOS",
      payload: docData
    });
  };
  const getCursos = async () => {
    const response = db.collection("cursos");
    const data = await response.orderBy("año", "desc").get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    dispatchCursos({
      type: "GET_CURSOS",
      payload: docData
    });
  };

  return (
    <EstudiosContext.Provider
      value={{
        Estudios: EstudiosState.EstudiosArray,
        Cursos: CursosState.CursosArray,
        getEstudios,
        getCursos
      }}
    >
      {props.children}
    </EstudiosContext.Provider>
  );
};

export default EstudiosState;
