import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TCountry } from "../components/countries/Countries";

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

  return <div>Country</div>;
};

export default Country;
