import { useRef, useState } from "react";
import "./Hero.css";
import { useGetSearchSuggestion } from "../../hooks/useGetSearchSuggestion";
import SearchSuggestions from "../SearchSuggestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const Hero = ({ banner = null }) => {
  const userInputRef = useRef(null);
  const [userInput, setUserInput] = useState("");

  const { searchSuggestions, loading: loadingSuggestion } =
    useGetSearchSuggestion(userInput);

  const searchInputUpdateRef = useRef(null);
  let searchInputUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    clearTimeout(searchInputUpdate);

    searchInputUpdate = setTimeout(() => {
      setUserInput(e.target.value);
    }, 1000);
  };

  return (
    <div className="hero-container wrapper-new">
      <div>{banner ? banner : null}</div>
      <div className="hero-form-wrapper">
        <div className="hero-form">
          <form action="" onSubmit={submitHandler}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Movies or TV shows"
                ref={userInputRef}
                onChange={inputChangeHandler}
              />

              <button>Search</button>
            </div>
          </form>
          <div className="hero-search-suggestion-wrapper">
            <SearchSuggestions
              data={searchSuggestions}
              loading={loadingSuggestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
