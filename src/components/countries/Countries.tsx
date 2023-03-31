import React, { useEffect, useState } from "react";
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

type CountriesProps = {
  countrySearch: string;
  regionSearch: string;
};

const Countries = ({ countrySearch, regionSearch }: CountriesProps) => {
  const [filteredCountries, setFilteredCountries] = useState<
    TCountry | null | undefined
  >(null);

  const URL: string = "https://restcountries.com/v3.1/all";

  function fetchCountries() {
    return axios.get<TCountry>(URL).then((response) => response.data);
  }

  const countriesResponse: UseQueryResult<TCountry, Error> = useQuery(
    "countries",
    fetchCountries
  );

  useEffect(() => {
    setFilteredCountries(
      countriesResponse.data?.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(countrySearch.toLocaleLowerCase())
      )
    );
  }, [countrySearch]);

  if (filteredCountries?.length === 0) return <p>No Country Found!</p>;
  countriesResponse.isFetching && <h2>Loading...</h2>;

  return (
    <div className="countries">
      {countriesResponse.isFetched &&
        !filteredCountries &&
        countriesResponse.data?.map((country) => (
          <Country key={country.name.common} countryData={country} />
        ))}
      {countriesResponse.isFetched &&
        filteredCountries &&
        filteredCountries.map((country) => (
          <Country key={country.name.common} countryData={country} />
        ))}
    </div>
  );
};

export default Countries;
