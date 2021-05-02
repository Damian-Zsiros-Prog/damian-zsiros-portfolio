import "./App.css";
import "./database";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import DatosPersonales from "./components/DatosPersonales";
import MenuSuperior from "./components/MenuSuperior";
import Inicio from "./components/Inicio";
import Habilidades from "./components/Habilidades";
import Estudios from "./components/Estudios";
import Experiencia from "./components/Experiencia";
import Contacto from "./components/Contacto";
import Repositorios from "./components/Repositorios";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 col-sm-8 main-content p-0">
            <MenuSuperior />
            <div className="container-fluid mt-4 container">
              <Switch>
                <Route path="/repositorios">
                  <Repositorios />
                </Route>
                <Route path="/contacto">
                  <Contacto />
                </Route>
                <Route path="/experiencia">
                  <Experiencia />
                </Route>
                <Route path="/estudios">
                  <Estudios />
                </Route>
                <Route path="/habilidades">
                  <Habilidades />
                </Route>
                <Route path="/datos-personales">
                  <DatosPersonales />
                </Route>
                <Route path="/" component={Inicio} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
