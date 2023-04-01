import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { TCountry } from "../components/countries/Countries";
import CountryDetails from "../components/CountryDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useQuery } from "react-query";

const Country = () => {
  let { country } = useParams();
  const navigate = useNavigate();

  const URL: string = `https://restcountries.com/v3.1/name/${country
    ?.toLowerCase()
    .replace("_", " ")}?fullText=true`;

  function fetchCountry() {
    return axios.get<TCountry>(URL).then((response) => response.data);
  }

  const countryResponse = useQuery<TCountry, Error>(
    `${country}`,
    () => fetchCountry(),
    {
      onError: () => errorResponseHandler(),
      retry: false,
    }
  );

  function errorResponseHandler() {
    alert("Invalid Country! Going back to main page!");
    navigate("/");
  }

  return (
    <div className="countryDetails | container">
      <Link to="/" className="countryDetails-btn | btn box">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </Link>
      {countryResponse.isFetched && (
        <CountryDetails countryData={countryResponse?.data![0]} />
      )}
    </div>
  );
};

export default Country;
