import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../../../assets/logo.png";
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img className="py-4" src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{ moment().format('LLLL')}</p>
      </div>
      <div className="container d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" className="bg-light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                Profile
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
