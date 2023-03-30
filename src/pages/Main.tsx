import React, { useState } from "react";
import Header from "../components/Header";
import Countries from "../components/countries/Countries";

const Main = () => {
  const [countrySearch, setCountrySearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  return (
    <div className="container">
      <Header
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
        regionSearch={regionSearch}
        setRegionSearch={setRegionSearch}
      />
      <Countries />
    </div>
  );
};

export default Main;
