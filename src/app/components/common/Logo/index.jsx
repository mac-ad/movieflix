import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      {/* <img src="logo.png" alt="" /> */}
      <h2 className="font-semibold p-0 px-2 rounded-md">
        <Icon icon="mdi:movie-settings-outline" className="text-white" />
      </h2>
    </Link>
  );
};

export default Logo;
