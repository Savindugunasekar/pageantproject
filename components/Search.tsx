import { FaSearch } from 'react-icons/fa';

// Define types for the props
interface SearchProps {
  setSearchTerm: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative w-full max-w-lg mx-24 my-10">
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-full py-2 px-4 shadow-lg border border-slate-400 border-3">
        <input
          className="bg-transparent border-none outline-none text-slate-700 text-lg w-full placeholder-slate-700"
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <FaSearch className="text-slate-700 text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
