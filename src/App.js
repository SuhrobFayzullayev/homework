import { Container, Row, Nav, Navbar, Button, Card, InputGroup, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container fluid='xl'>
      <Row>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand className='text-white' href="#home">Start-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav position-relative">
              <Nav className="me-5 position-absolute end-0">
                <Nav.Link href="#home" className='text-muted fw-bold'>Home</Nav.Link>
                <Nav.Link href="#link" className='text-muted fw-bold'>About</Nav.Link>
                <Nav.Link href="#link" className='text-muted fw-bold'>Contact</Nav.Link>
                <Nav.Link href="#link" className='text-white fw-bold'>Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row className='py-5 bg-light'>
        <h1 className='text-center fw-bold mt-5'>Welcome to Blog Home!</h1>
        <h4 className='text-center fw-light mt-1 mb-5'>A Bootstrap 5 starter layout for your next blog homepage</h4>
      </Row>
      <Row className='pt-4 px-5'>
        <div className="col-8">
          <Card className='mx-2 px-0'>
            <Card.Img variant="top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" className='m-0' />
            <Card.Body className='pb-4'>
              <Card.Title className='fw-light fs-6'>January 1, 2022</Card.Title>
              <Card.Title className='fw-normal fs-2'>Featured Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
              </Card.Text>
              <Button variant="primary">Read more →</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card className='px-0 mb-4'>
            <Card.Header className="">Search</Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter seach term..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  Go!
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
          <Card className='px-0 my-4'>
            <Card.Header className="">Catagories</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <a href="#">Web Desing</a>
                  <br />
                  <a href="#">HTML</a>
                  <br />
                  <a href="#">Freebies</a>
                </Col>
                <Col>
                  <a href="#">Javascript</a>
                  <br />
                  <a href="#">CSS</a>
                  <br />
                  <a href="#">Tutorial</a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className='px-0 my-4'>
            <Card.Header className="">Catagories</Card.Header>
            <Card.Body>
              You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Row className='pb-4 px-5'>
        <div className="col-4">
          <Card className='mx-1 px-0'>
            <Card.Img variant="top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" className='m-0' />
            <Card.Body className='pb-4'>
              <Card.Title className='fw-light fs-6'>January 1, 2022</Card.Title>
              <Card.Title className='fw-bold fs-4'>Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
              </Card.Text>
              <Button variant="primary">Read more →</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card className='mx-1 px-0'>
            <Card.Img variant="top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" className='m-0' />
            <Card.Body className='pb-4'>
              <Card.Title className='fw-light fs-6'>January 1, 2022</Card.Title>
              <Card.Title className='fw-bold fs-4'>Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
              </Card.Text>
              <Button variant="primary">Read more →</Button>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Row className='pb-4 px-5'>
        <div className="col-4">
          <Card className='mx-1 px-0'>
            <Card.Img variant="top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" className='m-0' />
            <Card.Body className='pb-4'>
              <Card.Title className='fw-light fs-6'>January 1, 2022</Card.Title>
              <Card.Title className='fw-bold fs-4'>Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
              </Card.Text>
              <Button variant="primary">Read more →</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card className='mx-1 px-0'>
            <Card.Img variant="top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" className='m-0' />
            <Card.Body className='pb-4'>
              <Card.Title className='fw-light fs-6'>January 1, 2022</Card.Title>
              <Card.Title className='fw-bold fs-4'>Post Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
              </Card.Text>
              <Button variant="primary">Read more →</Button>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Row className='px-5'>
        <div className="col-8">
        <hr className='mb-4'/>
          <nav aria-label="Page navigation example" className='px-5 mx-5'>
            <ul class="pagination mx-5">
              <li class="page-item"><a class="page-link disabled" href="#">Newer</a></li>
              <li class="page-item"><a class="page-link active" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">15</a></li>
              <li class="page-item"><a class="page-link" href="#">older</a></li>
            </ul>
          </nav>
        </div>
      </Row>
      <Row className='p-5 bg-dark'>
        <h6 className='text-center text-white mt-2'>Copyright © Your Website 2022</h6>
      </Row>
    </Container>
  );
}

export default App;
