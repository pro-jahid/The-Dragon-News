import { Button, } from "react-bootstrap";
import logo from "../../../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";



const Header = () => {
  
  return (
    <div>
      <div className="text-center">
        <img className="py-4" src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{moment().format("LLLL")}</p>
      </div>
      <div className="container d-flex py-4 bg-light">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger fs-4" speed={100}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain
          — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
