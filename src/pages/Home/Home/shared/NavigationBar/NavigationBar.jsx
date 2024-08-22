import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../provider/AuthProvider";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error =>console.log(error)
        )
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3 shadow-lg">
            <Container>
                <Link to="/" className="navbar-brand fw-bold text-uppercase">
                    NewsPortal
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/category/0" className="nav-link mx-2 text-light">
                            Home
                        </Link>
                        <Nav.Link href="#about" className="mx-2 text-light">
                            About
                        </Nav.Link>
                        <Nav.Link href="#career" className="mx-2 text-light">
                            Career
                        </Nav.Link>
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        {user ? (
                            <>
                                <FaUserCircle className="text-light" style={{ fontSize: "2rem", marginRight: "10px" }} />
                                <Button onClick={handleLogOut} variant="outline-light" className="ms-2">
                                    LogOut
                                </Button>
                            </>
                        ) : (
                            <Link to="/login">
                                <Button variant="outline-light" className="ms-2">
                                    Login
                                </Button>
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
