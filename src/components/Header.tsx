import React, { useState } from "react";
import { faMagnifyingGlass, faBroom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [countrySearch, setCountrySearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  return (
    <div className="main | flex">
      <div className="main-search | flex align-items-center box">
        <span className="main-searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          value={countrySearch}
          onChange={(e) => setCountrySearch(e.target.value)}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div className="main-selectWrapper | box">
        <select
          className="main-select "
          name=""
          id=""
          value={regionSearch}
          onChange={(e) => setRegionSearch(e.target.value)}
        >
          <option value="" disabled hidden>
            Filter by Region
          </option>
        </select>
        {regionSearch !== "" && (
          <span className="main-clear" onClick={() => setRegionSearch("")}>
            <FontAwesomeIcon icon={faBroom} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
