import { useState, useEffect, useContext } from "react";
import Loader from "../../components/Loader/Loader";

import "./Repositorios.css";
// Context
import RepositoriosContext from "../../context/Repositorios/RepositoriosContext";
const Repositorios = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const { Repositorios, getRepositorios } = useContext(RepositoriosContext);

  useEffect(() => {
    document.title =
      "Repositorios - Damian Zsiros Gonzalez - Web Developer - Cartagena de Indias";
  }, []);
  useEffect(() => {
    getRepositorios();
    setInterval(() => {
      setIsLoading(false);
    }, 400);
  }, [getRepositorios]);

  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container-grid repos" style={{ padding: "-5px" }}>
            {Repositorios.map(repositorio => (
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
          {/* <div className="w-100 ">
            <nav aria-label="Repositorios pagination nav" className="">
              <ul className="pagination display-flex justify-content-center">
                <li className="page-item">
                  <button className="page-link">Previous</button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handleClickNextPage()}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Repositorios;
