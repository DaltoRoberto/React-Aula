import { Container } from "react-bootstrap";
import CarouselAnuncios from "../componentes/CarouselAnuncios";
import NavBar from "../componentes/NavBar";
import Fotos from "../componentes/Fotos";
import Galeria from "../componentes/Galeria";

function Home() {
  return (
    <NavBar>
      <CarouselAnuncios />
      <br/>
      <Galeria />
    </NavBar>
  );
}

export { Home };
