import React, { useReducer } from "react";

import RepositoriosReducer from "./RepositoriosReducer";
import RepositoriosContext from "./RepositoriosContext";

const RepositoriosState = props => {
  const initialState = {
    RepositoriosArray: []
  };

  const [RepositoriosState, dispatch] = useReducer(
    RepositoriosReducer,
    initialState
  );

  const getRepositorios = async () => {
    const res = await fetch(
      "https://api.github.com/users/Damian-Zsiros-Prog/repos",
      {
        method: "GET",
        username: "Damian-Zsiros-Prog"
      }
    );
    const data = await res.json();
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 600);
    dispatch({
      type: "GET_REPOSITORIOS",
      payload: data
    });
  };

  return (
    <RepositoriosContext.Provider
      value={{
        Repositorios: RepositoriosState.RepositoriosArray,
        getRepositorios
      }}
    >
      {props.children}
    </RepositoriosContext.Provider>
  );
};

export default RepositoriosState;
