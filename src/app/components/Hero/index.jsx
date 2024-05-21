import { useRef, useState } from "react";
import "./Hero.css";
import { useGetSearchSuggestion } from "../../hooks/useGetSearchSuggestion";
import SearchSuggestions from "../SearchSuggestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Search from "../Search/Search";

const Hero = ({ banner = null }) => {
  const userInputRef = useRef(null);
  const [userInput, setUserInput] = useState("");

  return (
    <div className="hero-container wrapper-new h-[60vh] md:h-[80vh]">
      <div>{banner ? banner : null}</div>
      <Search />
    </div>
  );
};

export default Hero;
