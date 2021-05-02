import "./Habilidades.css";
import db from "../database";
import Loader from "./Loader";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";

const Habilidades = () => {
  const [Habilidades, setHabilidades] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const getAllHabilidades = async () => {
    const response = db.collection("habilidades").orderBy("percentage", "desc");
    const data = await response.get();
    const docData = [];
    data.docs.forEach(item => {
      docData.push(item.data());
    });
    setHabilidades(docData);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllHabilidades();
  }, []);
  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Habilidades</h1>
          <div className="container-grid">
            {Habilidades.map(habilidad => (
              <div className="skill">
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
