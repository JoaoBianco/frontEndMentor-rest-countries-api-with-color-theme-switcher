import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import Country from "./Country";

export type TCountry = {
  name: {
    common: string;
    nativeName: string[];
  };
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  flags: {
    png: string;
    alt: string;
  };
}[];

const Countries = () => {
  const URL: string = "https://restcountries.com/v3.1/all";

  function fetchCountries() {
    return axios.get<TCountry>(URL).then((response) => response.data);
  }

  const countriesResponse: UseQueryResult<TCountry, Error> = useQuery(
    "countries",
    fetchCountries
  );

  countriesResponse.isFetching && <h2>Loading...</h2>;

  return (
    <div className="countries">
      {countriesResponse.isFetched &&
        countriesResponse.data?.map((country) => (
          <Country key={country.name.common} countryData={country} />
        ))}
    </div>
  );
};

export default Countries;
