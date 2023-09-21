import { original } from "../../statics";

import "./CompanyLogo.css";

const CompanyLogo = ({ logoPath }) => {
  return (
    <div className="company-logo">
      <img src={`${original}${logoPath}`} alt="" />
    </div>
  );
};

export default CompanyLogo;
