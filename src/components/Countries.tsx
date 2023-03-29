import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Countries = () => {
  const URL: string = "https://restcountries.com/v3.1/all";

  function fetchCountries() {
    return axios.get(URL);
  }

  const countriesResponse = useQuery("countries", fetchCountries);

  return <div className="countries">Countries</div>;
};

export default Countries;
