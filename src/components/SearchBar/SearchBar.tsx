import type { FormEvent } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm, handleSubmit }: SearchBarProps) => {
  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
        className={css.searchInput}
      />
      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
