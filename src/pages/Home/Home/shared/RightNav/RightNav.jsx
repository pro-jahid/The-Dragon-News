import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login with</h4>
        <Button className="mb-2" variant="primary">
          <FaGoogle />
          Login with Google
        </Button>
        <Button variant="secondary">
          <FaGithub />
          Login with Github
        </Button>
      </div>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item disabled><FaFacebook />Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
