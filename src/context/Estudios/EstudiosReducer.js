import { GET_ESTUDIOS, GET_CURSOS } from "../types";

export const EstudiosReducer = (Estudios, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ESTUDIOS:
      return {
        ...Estudios,
        EstudiosArray: payload
      };
    default:
      return Estudios;
  }
};
export const CursosReducer = (Cursos, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CURSOS:
      return {
        ...Cursos,
        CursosArray: payload
      };
    default:
      return Cursos;
  }
};
