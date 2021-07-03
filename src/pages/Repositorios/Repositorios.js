import { useState, useEffect, useContext } from "react";
import Loader from "../../components/Loader/Loader";

import "./Repositorios.css";
// Context
import RepositoriosContext from "../../context/Repositorios/RepositoriosContext";
const Repositorios = () => {
  const [ReposActuales, setReposActuales] = useState([]);
  const [page, setpage] = useState(0);
  const [IsLoading, setIsLoading] = useState(true);
  const { Repositorios, getRepositorios, lengthRepos } =
    useContext(RepositoriosContext);

  useEffect(() => {
    document.title =
      "Repositorios - Damian Zsiros Gonzalez - Web Developer - Cartagena de Indias";
  }, []);
  useEffect(() => {
    getRepositorios(page);
    setReposActuales(Repositorios);
    setInterval(() => {
      setIsLoading(false);
    }, 400);
  }, [Repositorios, getRepositorios, page]);

  const handleNextPage = () => {
    setpage(page + 1);
  };
  const handlePrevPage = () => {
    setpage(page - 1);
  };

  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container-grid repos" style={{ padding: "-5px" }}>
            {Repositorios.map((repositorio) => (
              <div
                className="card"
                style={{ width: "18rem" }}
                key={repositorio.id}
              >
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

          <div className="mt-3">
            {page > 0 ? (
              <button
                type="button"
                className="btn btn-primary mr-2"
                onClick={() => handlePrevPage()}
              >
                Anterior pagina
              </button>
            ) : (
              <button type="button" className="btn btn-primary mr-2" disabled>
                Anterior pagina
              </button>
            )}
            {page !== lengthRepos ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleNextPage()}
              >
                Siguiente pagina
              </button>
            ) : (
              <button type="button" className="btn btn-success" disabled>
                Siguiente pagina
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Repositorios;
