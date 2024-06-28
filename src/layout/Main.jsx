import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Home/Home/shared/Footer/Footer";
import Header from "../pages/Home/Home/shared/Header/Header";
import LeftNav from "../pages/Home/Home/shared/LeftNav/LeftNav";
import RightNav from "../pages/Home/Home/shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h2 className="text-center">Main content coming</h2>
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
