import logo from "../../../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img className="py-4" src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{ moment().format('LLLL')}</p>
      </div>
    </div>
  );
};

export default Header;
