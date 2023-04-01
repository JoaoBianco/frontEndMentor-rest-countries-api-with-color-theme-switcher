import React from "react";
import { TCountryProps } from "./countries/Country";

const CountryDetails = ({ countryData }: TCountryProps) => {
  function renderNativeNames(): React.ReactNode {
    for (const [key, value] of Object.entries(countryData.name.nativeName)) {
      return <span key={key}>{value.common}</span>;
    }
  }

  function renderCurrencies() {
    for (const [key, value] of Object.entries(countryData.currencies)) {
      return <span key={key}>{value.name}</span>;
    }
  }

  return (
    <div className="countryDetails-wrapper | flex">
      <img src={countryData.flags.png} alt={countryData.flags.alt || ""} />
      <div className="countryDetails-innerWrapper | flex flex-column">
        <h2>{countryData.name.common}</h2>
        <div className="flex space-between flex-wrap">
          <div style={{ minWidth: "210px" }}>
            <p>
              <span className="bold">Native Name: </span>
              {renderNativeNames()}
            </p>
            <p>
              <span className="bold">Population: </span>
              {new Intl.NumberFormat("pt-BR").format(countryData.population)}
            </p>
            <p>
              <span className="bold">Region: </span>
              {countryData.region}
            </p>
            <p>
              <span className="bold">Sub Region: </span>
              {countryData.subRegion || "---"}
            </p>
            <p>
              <span className="bold">Capital: </span>
              {countryData.capital}
            </p>
          </div>
          <div>
            <p>
              <span className="bold">Top Level Domain: </span>
              {countryData.tld.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
            <p>
              <span className="bold">Currencies: </span>
              {renderCurrencies()}
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap align-items-center gap-400">
            <p className="bold">Border Countries:</p>
            {countryData.borders?.length > 0 ? (
              countryData.borders?.map((border) => (
                <span key={border} className="box padding-100-700">
                  {border}
                </span>
              ))
            ) : (
              <span>---</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
