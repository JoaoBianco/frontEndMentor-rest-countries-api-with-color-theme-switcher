import React from "react";
import { Link } from "react-router-dom";

export type TCountryProps = {
  countryData: {
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
  };
};

const Country = ({ countryData }: TCountryProps) => {
  return (
    <Link
      to={`${countryData.name.common.replace(" ", "_")}`}
      className="country | box"
    >
      <img src={countryData.flags.png} alt={countryData.flags.alt || ""} />
      <div className="box-container">
        <h3>{countryData.name.common}</h3>
        <div className="country__text | flex">
          <p className="bold">Population: </p>
          <p>{new Intl.NumberFormat("pt-BR").format(countryData.population)}</p>
        </div>
        <div className="country__text | flex">
          <p className="bold">Region:</p>
          <p>{countryData.region}</p>
        </div>
        <div className="country__text | flex">
          <p className="bold">Capital:</p>
          <p>{countryData.capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
