import { useMemo, useRef, useState } from "react";
import { useGetSearchSuggestion } from "../../hooks/useGetSearchSuggestion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { debounce } from "lodash";
import SearchSuggestions from "../SearchSuggestions";

const Search = () => {
  const [searchInput, setSearchInput] = useState(null);
  const { searchSuggestions, loading: loadingSuggestion } =
    useGetSearchSuggestion(searchInput ?? "");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const searchChangeHandler = debounce((e) => {
    setSearchInput(e.target.value);
  }, 500);

  return (
    <div className="z-[999] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-[90%] flex flex-col gap-2 transition-all">
      {/* <h1 className="text-center w-fit  max-w-[30ch] mx-auto text-5xl md:text-7xl md:block opacity-70 font-bold hidden">
        Best Platform to find info about your favourite movies or Tv shows
      </h1> */}
      <div className=" border-[rgba(255,255,255,.5)] border w-[90%] max-w-[80ch] mx-auto py-2 px-6 rounded-full  bg-[var(--gray-2)] transition-all">
        <form
          action=""
          className="flex gap-2 items-center"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className="w-full p-2 bg-transparent outline-none md:text-xl "
            placeholder="Search for a movie or series"
            onChange={searchChangeHandler}
          />
          <button className="text-white ">
            <Icon icon="iconoir:search" className="text-2xl" />
          </button>
        </form>
      </div>
      <div className="   w-full max-w-[600px] mx-auto transition-all">
        <SearchSuggestions
          data={searchSuggestions}
          loading={loadingSuggestion}
        />
      </div>
    </div>
  );
};

export default Search;
