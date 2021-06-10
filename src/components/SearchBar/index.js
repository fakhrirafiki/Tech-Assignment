import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SearchImg } from "assets/images";

import "./SearchBar.css";

function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);

    setTimeout(() => {
      history.push(`/search/${e.target.value}`);
    }, 500);
  };

  return (
    <div className="SearchBar" onKeyPress={handleSearch}>
      <input className="SearchBar__input" type="text" placeholder="Search news here..." onChange={handleChange} defaultValue={props.match?.params?.name || ""} />
      <Link className="SearchBar__link" to={`/search/${inputValue}`}>
        <span className="SearchBar__text">Search</span>
        <img className="SearchBar__icon" src={SearchImg} alt="search" />
      </Link>
    </div>
  );
}

export default SearchBar;
