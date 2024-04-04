import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ClipLoader } from "react-spinners";
import CountriesDetails from "./CountriesDetails";
import CountriesList from "./CountriesList";

function DisplayCountries() {
  const { data, filterCountries, isLoading } = useContext(DataContext);

  const filtered = data.filter((country) => {
    return country.toLowerCase().startsWith(filterCountries.toLowerCase());
  });

  function renderCountries(countries) {
    return countries.map((country, i) => (
      <CountriesList country={country} key={i} index={i} />
    ));
  }

  return (
    <div className="container">
      <div className={isLoading ? "spinner" : "countries-list-container"}>
        {isLoading ? (
          <ClipLoader color={"#ffffff"} size={100} />
        ) : filtered.length > 0 ? (
          renderCountries(filtered)
        ) : (
          renderCountries(data)
        )}
      </div>

      <CountriesDetails />
    </div>
  );
}

export default DisplayCountries;
