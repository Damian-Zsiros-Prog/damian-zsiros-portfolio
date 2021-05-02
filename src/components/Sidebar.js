import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="col-md-3 col-sm-4 sidebar1 " style={{ position: "sticky" }}>
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
      <div className="logo">
        <Link to="/">
          <img
            src="./perfil.jpg"
            className="img-responsive center-block"
            alt="Logo"
            aria-label="foto-de-perfil"
          />
        </Link>
        <h1>Damian De Jesus Zsiros Gonzalez</h1>
      </div>
      <br />
      <div className="left-navigation">
        <ul className="list">
          <li className="facebook">
            <a
              href="https://www.facebook.com/damianzsirosdev"
              target="_blank"
              rel=" noreferrer"
            >
              <i className="fa fa-facebook"></i> Facebook page
            </a>
          </li>
          <li className="github">
            <a
              className=""
              href="https://github.com/Damian-Zsiros-Prog"
              target="_blank"
              rel=" noreferrer"
            >
              <i className="fa fa-github"></i> Github
            </a>
          </li>
          <li className="twitter">
            <a
              className=""
              href="https://twitter.com/ProgDamian"
              target="_blank"
              rel=" noreferrer"
            >
              <i className="fa fa-twitter"></i> Twitter
            </a>
          </li>
          <li className="linkedin">
            <a
              className=""
              href="https://linkedin.com/in/damian-de-jesus-zsiros-gonzalez-55b641192/"
              target="_blank"
              rel=" noreferrer"
            >
              <i className="fa fa-linkedin"></i> Linkedin
            </a>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default Sidebar;
