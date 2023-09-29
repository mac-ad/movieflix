import { useRef, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const SearchBox = ({ setResults, val }) => {
  const [value, setValue] = useState(val ? val : "");

  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // navigate({
    //   pathname: location.pathname,
    //   search: createSearchParams({
    //     query: inputRef.current.value,
    //   }).toString(),
    // });
    setSearchParams({ query: inputRef.current.value, page: 1 });
  };

  return (
    <div className="searchBox-container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.value)}
        />
        <button>search</button>
      </form>
    </div>
  );
};

export default SearchBox;
