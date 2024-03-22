import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Find something to learn..."
        />
        <div className="icon-wrap">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
