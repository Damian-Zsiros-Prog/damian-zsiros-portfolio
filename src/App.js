import "./App.css";
import "./database";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import DatosPersonales from "./pages/Datos Personales/DatosPersonales";
import MenuSuperior from "./components/Menu Superior/MenuSuperior";
import Inicio from "./pages/Inicio/Inicio";
import Habilidades from "./pages/Habilidades/Habilidades";
import Estudios from "./pages/Estudios/Estudios";
import Experiencia from "./pages/Experiencia/Experiencia";
import Contacto from "./pages/Contacto/Contacto";
import Repositorios from "./pages/Repositorios/Repositorios";
// States
import DatosPersonalesState from "./context/Datos Personales/DatosPersonalesState";
import HabilidadesState from "./context/Habilidades/HabilidadesState";
import EstudiosState from "./context/Estudios/EstudiosState";
import ExperienciaState from "./context/Experiencia/ExperienciaState";
import RepositoriosState from "./context/Repositorios/RepositoriosState";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 col-sm-8 main-content p-0">
            <MenuSuperior />
            <div className="container-fluid mt-4 pl-5 pl-5">
              <Switch>
                <Route path="/repositorios">
                  <RepositoriosState>
                    <Repositorios />
                  </RepositoriosState>
                </Route>
                <Route path="/contacto">
                  <Contacto />
                </Route>
                <Route path="/experiencia">
                  <ExperienciaState>
                    <Experiencia />
                  </ExperienciaState>
                </Route>
                <Route path="/estudios">
                  <EstudiosState>
                    <Estudios />
                  </EstudiosState>
                </Route>
                <Route path="/habilidades">
                  <HabilidadesState>
                    <Habilidades />
                  </HabilidadesState>
                </Route>
                <Route path="/datos-personales">
                  <DatosPersonalesState>
                    <DatosPersonales />
                  </DatosPersonalesState>
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
