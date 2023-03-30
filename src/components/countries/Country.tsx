import React from "react";

type TCountryProps = {
  countryData: {
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
      googleMaps: string;
      openStreetMaps: string;
    };
  };
};

const Country = ({ countryData }: TCountryProps) => {
  return <div>{countryData.name.common}</div>;
};

export default Country;
