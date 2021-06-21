import "./Habilidades.css";

import Loader from "../../components/Loader/Loader";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect, useContext } from "react";
// Context
import HabilidadesContext from "../../context/Habilidades/HabilidadesContext";

const Habilidades = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const { getHabilidades, HabilidadesState } = useContext(HabilidadesContext);

  useEffect(() => {
    document.title =
      "Habilidades - Damian Zsiros Gonzalez - Web Developer - Cartagena de Indias";
  }, []);
  useEffect(() => {
    getHabilidades();
    setInterval(() => {
      setIsLoading(false);
    }, 400);
  }, [getHabilidades, HabilidadesState]);
  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Habilidades</h1>
          <div className="container-grid1">
            {HabilidadesState.map(habilidad => (
              <div className="skill" key={habilidad.key}>
                <h5>{habilidad.name}</h5>
                <CircularProgressbar
                  className="progesoCircular"
                  value={habilidad.percentage / 100}
                  maxValue={1}
                  text={` ${habilidad.percentage}%`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Habilidades;
