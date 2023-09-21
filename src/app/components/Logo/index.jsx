import { Movie } from "../../icons";
import Icon from "../Icon";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Icon icon={<Movie />} />
      <p>MovieFlix</p>
    </div>
  );
};

export default Logo;
