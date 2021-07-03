import React, { useReducer, useState, useEffect } from "react";

import RepositoriosReducer from "./RepositoriosReducer";
import RepositoriosContext from "./RepositoriosContext";

const RepositoriosState = (props) => {
  const initialState = {
    RepositoriosArray: [],
    length: 0,
  };

  const [lengthRepositorios, setlengthRepositorios] = useState(0);

  const [RepositoriosState, dispatch] = useReducer(
    RepositoriosReducer,
    initialState
  );

  const getRepositorios = async (page) => {
    const res = await fetch(
      "https://api.github.com/users/Damian-Zsiros-Prog/repos",
      {
        method: "GET",
        username: "Damian-Zsiros-Prog",
      }
    );
    const data = await res.json();
    setlengthRepositorios(data.length);
    const arrayData = data.slice(page, 6 + page);
    dispatch({
      type: "GET_REPOSITORIOS",
      payload: arrayData,
    });
  };

  return (
    <RepositoriosContext.Provider
      value={{
        Repositorios: RepositoriosState.RepositoriosArray,
        getRepositorios,
        lengthRepos: lengthRepositorios,
      }}
    >
      {props.children}
    </RepositoriosContext.Provider>
  );
};

export default RepositoriosState;
