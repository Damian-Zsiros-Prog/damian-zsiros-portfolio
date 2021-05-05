import { GET_HABILIDADES } from "../types";

const HabilidadesReducer = (Habilidades, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_HABILIDADES:
      return {
        ...Habilidades,
        HabilidadesArray: payload
      };
    default:
      return Habilidades;
  }
};

export default HabilidadesReducer;
