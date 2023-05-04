import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="WoodLand Hills"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
