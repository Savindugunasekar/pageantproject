import { forwardRef } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  setSearchTerm: (term: string) => void;
}

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ setSearchTerm }, ref) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    return (
      <div className="flex justify-center items-center w-full my-20 px-10 ">
        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full py-2 px-4 shadow-lg border-slate-400 border-[2px] w-full max-w-md">
          <input
            ref={ref}
            className="bg-transparent border-none outline-none text-slate-700 text-base sm:text-lg w-full placeholder-slate-500"
            type="text"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          <FaSearch className="text-slate-700 text-lg sm:text-xl cursor-pointer" />
        </div>
      </div>
    );
  }
);

export default Search;
