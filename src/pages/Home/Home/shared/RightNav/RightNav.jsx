import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../../../assets/bg.png';

const RightNav = () => {
  return (
    <div className="right-nav p-3">
      <div className="mb-4">
        <h4 className="text-center">Login with</h4>
        <Button className="mb-3 w-100 d-flex align-items-center justify-content-center" variant="primary">
          <FaGoogle className="me-2" /> Login with Google
        </Button>
        <Button className="w-100 d-flex align-items-center justify-content-center" variant="secondary">
          <FaGithub className="me-2" /> Login with Github
        </Button>
      </div>
      
      <div className="mb-4">
        <h4 className="text-center">Find Us On</h4>
        <ListGroup className="social-links">
          <ListGroup.Item className="d-flex align-items-center">
            <FaFacebook className="me-2" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <FaTwitter className="me-2" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <FaInstagram className="me-2" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      
      <QZone />
      
      <div className="mt-4">
        <img src={bg} alt="Background" className="img-fluid rounded shadow" />
      </div>
    </div>
  );
};

export default RightNav;
