import React, { useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import Country from "./Country";
import LoadingCountries from "../loading/LoadingCountries";

export type TCountry = {
  name: {
    common: string;
    nativeName: { official: string; common: string }[];
  };
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  tld: string[];
  currencies: { name: string; symbol: string }[];
  flags: {
    png: string;
    alt: string;
  };
  borders: string[];
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
      countriesResponse.data?.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(countrySearch.toLocaleLowerCase()) &&
          country.region
            .toLocaleLowerCase()
            .includes(regionSearch.toLocaleLowerCase())
      )
    );
  }, [countrySearch, regionSearch]);

  if (filteredCountries?.length === 0) return <p>No Country Found!</p>;
  if (countriesResponse.isFetching) return <LoadingCountries />;

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
