import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      <div className="logo">
        {/* <img src="logo.png" alt="" /> */}
        <h2>movieflix</h2>
      </div>
    </Link>
  );
};

export default Logo;
