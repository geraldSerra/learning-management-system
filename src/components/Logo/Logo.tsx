import "./Logo.css"
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} />
    </div>
  );
};

export default Logo;
