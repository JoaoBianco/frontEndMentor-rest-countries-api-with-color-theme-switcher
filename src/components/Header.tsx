import React, { useRef } from "react";
import { faMagnifyingGlass, faBroom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  countrySearch: string;
  setCountrySearch: React.Dispatch<React.SetStateAction<string>>;
  regionSearch: string;
  setRegionSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({
  countrySearch,
  setCountrySearch,
  regionSearch,
  setRegionSearch,
}: HeaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="main | flex">
      <div className="main-search | flex align-items-center box">
        <span className="main-searchIcon">
          <FontAwesomeIcon
            onClick={() => inputRef.current?.focus()}
            icon={faMagnifyingGlass}
          />
        </span>
        <input
          ref={inputRef}
          value={countrySearch}
          onChange={(e) => setCountrySearch(e.target.value)}
          type="text"
          placeholder="Search for a country..."
        />
        {countrySearch !== "" && (
          <span className="main-clearIcon" onClick={() => setCountrySearch("")}>
            <FontAwesomeIcon icon={faBroom} />
          </span>
        )}
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
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
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
