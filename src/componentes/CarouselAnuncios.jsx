import { Carousel } from "react-bootstrap";
import img1 from "./../assets/images/banner_img (1).jpg";
import img2 from "./../assets/images/banner_img (2).jpg";
import img3 from "./../assets/images/banner_img (3).jpg";
import img4 from "./../assets/images/banner_img (4).jpg";
import img5 from "./../assets/images/banner_img (5).jpg";
import img6 from "./../assets/images/banner_img (6).jpg";
import img7 from "./../assets/images/banner_img (7).jpg";

function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img7} alt="" />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselAnuncios;
