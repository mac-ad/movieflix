import React from "react";
import "./SearchSuggestions.css";
import SuggestionCard from "./SuggestionCard";
import { Link } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

const SearchSuggestions = ({ data, loading }) => {
  return loading ? (
    <div className="searchsuggestions-container">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    </div>
  ) : data?.length > 0 ? (
    <div className="searchsuggestions-container">
      {data?.map((item) => (
        <SuggestionCard data={item} />
      ))}
      <button>
        <span>View all results</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>
    </div>
  ) : null;
};

export default SearchSuggestions;
