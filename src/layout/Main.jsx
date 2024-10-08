import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Home/Home/shared/Footer/Footer";
import Header from "../pages/Home/Home/shared/Header/Header";
import LeftNav from "../pages/Home/Home/shared/LeftNav/LeftNav";
import RightNav from "../pages/Home/Home/shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Home/Home/shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
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

export default Main;
