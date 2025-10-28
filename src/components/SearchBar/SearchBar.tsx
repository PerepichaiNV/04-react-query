import type { ChangeEvent, FormEvent } from "react";
import css from "./SearchBar.module.css";

export interface SearchBarProps {
  searchTerm: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ searchTerm, onInputChange, onSubmit }: SearchBarProps) => (
  <form className={css.searchForm} onSubmit={onSubmit}>
    <input
      type="text"
      value={searchTerm}
      placeholder="Search movies..."
      onChange={onInputChange}
      className={css.searchInput}
    />
    <button type="submit" className={css.searchButton}>
      Search
    </button>
  </form>
);

export default SearchBar;
