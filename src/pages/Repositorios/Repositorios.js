import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

import "./Repositorios.css";
const Repositorios = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const [repositorios, setRepositorios] = useState([]);
  const getRepositorios = async () => {
    const res = await fetch(
      "https://api.github.com/users/Damian-Zsiros-Prog/repos",
      {
        method: "GET",
        username: "Damian-Zsiros-Prog"
      }
    );
    const data = await res.json();
    setRepositorios(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };
  useEffect(() => {
    getRepositorios();
  }, []);
  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div className="container-grid repos" style={{ padding: "-5px" }}>
          {repositorios.map(repositorio => (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{repositorio.name}</h5>
                <p className="card-text">{repositorio.description}</p>
                <a
                  href={repositorio.html_url}
                  target="_blank"
                  className="card-link btn btn-primary btn-block"
                  rel="noreferrer"
                >
                  Ir a repositorio
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repositorios;
