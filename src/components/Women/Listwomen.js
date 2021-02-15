import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import imgm1 from'./imgw1.jpg'
import imgm2 from'./imgw2.jpg'
import imgm3 from'./imgw3.jpg'
import imgm4 from'./imgw4.jpg'
import imgm5 from'./imgw5.jpg'
import imgm6 from'./imgw6.jpg'
function Listwomen() {
  return (
    <div >
      <Container>
        <Row>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm1} />
            <Card.Body>
              <Card.Title>Textured-weave Jacket</Card.Title>
              <Card.Text>
              Jacket in woven, textured fabric. Collar, buttons at front, and two large front pockets with flap and integral side pockets. Dropped shoulders and long sleeves.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm2}  />
            <Card.Body>
              <Card.Title>Printed T-shirt</Card.Title>
              <Card.Text>
              Classic T-shirt in soft cotton jersey with a print motif, dropped shoulders and ribbing around the neckline.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm3}  />
            <Card.Body>
              <Card.Title>Cardigan</Card.Title>
              <Card.Text>
              Boxy cardigan in a soft rib knit containing some wool with a V-neck and buttons down the front
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

        </Row>
        <Row>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm4}  />
            <Card.Body>
              <Card.Title>Turtleneck Sweater</Card.Title>
              <Card.Text>
              Relaxed-fit, turtleneck sweater in soft, knit fabric with alpaca wool content. Dropped shoulders with seams slightly towards back and long, wide sleeves. Ribbing at neck, cuffs, and hem.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm5} />
            <Card.Body>
              <Card.Title>Faux Fur Jacket</Card.Title>
              <Card.Text>
              Jacket in soft faux fur. Round neckline, concealed hook-and-eye fasteners at front, and discreet side pockets. Lining in recycled polyester.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm6}  />
            <Card.Body>
              <Card.Title>Ankle-length Slacks</Card.Title>
              <Card.Text>
              Slacks in woven stretch fabric. Regular waist, elastication at back of waistband, and mock welt pocket at back. Slim, ankle-length legs with creases.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Listwomen
