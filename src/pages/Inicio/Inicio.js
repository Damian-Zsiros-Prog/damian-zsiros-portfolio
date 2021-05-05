import "./Inicio.css";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

const Inicio = () => {
  const [IsLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 600);
  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
        <div className="text-left inicio">
          <h1>¡Bienvenidos a mi portafolio!</h1>
          <p>
            Yo, Damian Zsiros Gonzalez, soy un informático que sueña con hacerse
            un hueco en el mundo de la informática. Sobre todo en el mundo de la
            programación.
          </p>
          <p>
            Voy por el camino de la informática aprendiendo y quiero compartir
            poco a poco los conocimientos que adquiero para ayudar a la gente
            con los problemas técnicos que puedan surgir.
          </p>
          <p>
            Solo soy una persona más de este mundo que quiere aportar su granito
            de arena, para ayudar a los demás en lo que pueda. Me encanta el
            tema de la formación y poder ayudar a los demás.
          </p>
          <p>
            Síguenos en las redes sociales que las tienes en este mismo
            curriculum vitae.
          </p>
          <p>
            Si necesitas contactar conmigo, ve a la pestaña Contacto. Te
            responderé lo antes posible
          </p>
          <p>
            En la pestaña de trabajos, podras ver todos los trabajos que he
            realizado con empresas o clientes naturales.
          </p>
        </div>
      )}
    </div>
  );
};

export default Inicio;
