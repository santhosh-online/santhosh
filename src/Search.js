import React from "react";

function Search({ handleInput, search }) {
  return (
    <div className="search-box-wrap">
      <input
        type="text"
        placeholder="Search for a movie"
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      /> 
    </div>
  );
}

export default Search;
