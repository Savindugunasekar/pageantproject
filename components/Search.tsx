import { FaSearch } from "react-icons/fa";

interface SearchProps {
  setSearchTerm: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative w-full flex justify-center  lg:justify-start px-4 sm:px-0 my-10  lg:ml-20">
      <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full py-2 px-4 shadow-lg border-slate-400 border-[2px] w-full mx-5 md:w-1/2 lg:w-1/3">
        <input
          className="bg-transparent border-none outline-none text-slate-700 text-base sm:text-lg w-full placeholder-slate-500"
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <FaSearch className="text-slate-700 text-lg sm:text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
