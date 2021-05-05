import { GET_EXPERIENCIA } from "../types";

const ExperienciaReducer = (Experiencia, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_EXPERIENCIA:
      return {
        ...Experiencia,
        ExperienciaArray: payload
      };
    default:
      return Experiencia;
  }
};

export default ExperienciaReducer;
