import React from 'react'
import {Navbar,Nav, Form,FormControl, Button} from 'react-bootstrap'
import kimono from './kimono.jpg';
function Navbaar() {
    return (
        <div>
<Navbar bg="dark" variant="dark">
<img  src={kimono} width='150 em'/>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Men">Men</Nav.Link>
      <Nav.Link href="/Women">Women</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Navbaar
