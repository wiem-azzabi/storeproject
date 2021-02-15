import React from 'react'
import{Carousel} from 'react-bootstrap';
import img1 from'./img1.jpg'
import img2 from'./img2.jpg'
import img3 from'./img3.jpg'
function Carouselhome() {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      width="200 em"
    />
    <Carousel.Caption>
      <h3>KIMONO</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      width="200 em"
    />
    <Carousel.Caption>
      <h3>KIMONO</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      width="200 em"
    />
    <Carousel.Caption>
      <h3>KIMONO</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Carouselhome
