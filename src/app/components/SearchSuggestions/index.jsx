import React from "react";
import "./SearchSuggestions.css";
import SuggestionCard from "./SuggestionCard";
import { Link } from "lucide-react";

const SearchSuggestions = ({ data }) => {
  return (
    <div className="searchsuggestions-container">
      {data?.map((item) => (
        <SuggestionCard data={item} />
      ))}
    </div>
  );
};

export default SearchSuggestions;
