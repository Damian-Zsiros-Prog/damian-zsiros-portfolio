import { GET_REPOSITORIOS } from "../types";

const repositoriosReducer = (Repositorios, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_REPOSITORIOS:
      return {
        ...Repositorios,
        RepositoriosArray: payload
      };
    default:
      return Repositorios;
  }
};

export default repositoriosReducer;
