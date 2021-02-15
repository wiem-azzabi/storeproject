import React from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import imgm1 from'./imgm1.jpg'
import imgm2 from'./imgm2.jpg'
import imgm3 from'./imgm3.jpg'
import imgm4 from'./imgm4.jpg'
import imgm5 from'./imgm5.jpg'
import imgm6 from'./imgm6.jpg'
function Listmen() {
  return (
    <div >
      <Container>
        <Row>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm1} />
            <Card.Body>
              <Card.Title>Zip-front Shirt Jacket</Card.Title>
              <Card.Text>
              Shirt jacket in woven fabric. Collar, zipper at front, and long sleeves with concealed snap fastener at cuffs. Open chest pockets, side-seam pockets, and straight-cut hem. Unlined.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm2}  />
            <Card.Body>
              <Card.Title>Sneakers</Card.Title>
              <Card.Text>
              Sneakers with a padded top edge, tongue, and lacing at front. Leather lining, leather insoles, and chunky soles.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm3}  />
            <Card.Body>
              <Card.Title>Cotton Shirt</Card.Title>
              <Card.Text>
              Straight-cut shirt in an airy, woven cotton fabric. Collar, buttons at front, gently dropped shoulders, and long sleeves with buttons at cuffs. 
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

        </Row>
        <Row>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm4}  />
            <Card.Body>
              <Card.Title>Relaxed-fit Hoodie</Card.Title>
              <Card.Text>
              Relaxed-fit sweatshirt hoodie in cotton-blend fabric. Lined drawstring hood, kangaroo pocket, long sleeves, and ribbing at cuffs and hem. Soft, brushed inside.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm6} />
            <Card.Body>
              <Card.Title>Denim Jacket</Card.Title>
              <Card.Text>
              Jacket in washed denim. Collar, chest pockets with flap and button and side pockets. Buttons at front, adjustable tab at sides with buttons, and button at cuffs.
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>

          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgm5}  />
            <Card.Body>
              <Card.Title>Regular Fit Cargo Pants</Card.Title>
              <Card.Text>
              Pants in woven cotton fabric. Zip fly with button, diagonal side pockets, and leg pockets and back pockets, both with flap and concealed snap fasteners.  
    </Card.Text>
              <Button variant="primary">buy now</Button>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Listmen
