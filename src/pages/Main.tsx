import React, { useState } from "react";
import Header from "../components/Header";
import Countries from "../components/countries/Countries";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  const [countrySearch, setCountrySearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  toast.error("Invalid Country! Going back to main page!");
  return (
    <div className="container">
      <Header
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
        regionSearch={regionSearch}
        setRegionSearch={setRegionSearch}
      />
      <Countries countrySearch={countrySearch} regionSearch={regionSearch} />
    </div>
  );
};

export default Main;
