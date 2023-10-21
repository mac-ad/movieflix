import { useRef, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const SearchBox = ({ setResults, val }) => {
  const [value, setValue] = useState(val ? val : "");

  return <div className="searchBox-container"></div>;
};

export default SearchBox;
