import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/datos-personales">
              Datos personales
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/habilidades">
              Habilidades
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/estudios">
              Estudios
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/experiencia">
              Experiencia
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/repositorios">
              Repositorios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
