import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import './Home.css'

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1584837140804-599306fb37f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZiUyMGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Dick's
          </Navbar.Brand>
          <Nav className="me-auto test22">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/products" className="nav-link">
              View All
            </Link>
            <Link to="/new" className="nav-link">
              Create
            </Link>
          </Nav>
        </Container>
        <Form className="style">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              placeholder="Search..."
              // value={}
              // onChange={}
            />
          </Form.Group>
        </Form>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3 mb-5">
          <Outlet />
      </Stack>
          <Footer />
    </>
  )
}

export default Home
