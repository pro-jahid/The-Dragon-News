import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Home/Home/shared/Footer/Footer";
import Header from "../pages/Home/Home/shared/Header/Header";
import RightNav from "../pages/Home/Home/shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const Newslayout = () => {
    return (
        <div>
            <Header></Header>
      <Container>
        <Row>
          
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col> 
        </Row>
      </Container>
      <Footer></Footer>
        </div>
    );
};

export default Newslayout;