/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function CountriesList({ country, index }) {
  const { setCountryName, setFilterCountries, setInput } =
    useContext(DataContext);

  function handleClick(e) {
    setCountryName(e.target.innerText);
    setInput("");
    setFilterCountries("");
  }

  return (
    <p className="countries" onClick={handleClick}>{`${
      index + 1
    }. ${country}`}</p>
  );
}

export default CountriesList;
