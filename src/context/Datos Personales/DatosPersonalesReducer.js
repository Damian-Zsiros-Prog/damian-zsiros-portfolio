import { GET_DATOS_PERSONALES } from "../types";

const datosPersonalesReducer = (DatosPersonales, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_DATOS_PERSONALES:
      return {
        ...DatosPersonales,
        DatosPersonalesArray: payload
      };
    default:
      return DatosPersonales;
  }
};

export default datosPersonalesReducer;
