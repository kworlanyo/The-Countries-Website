import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function CountriesDetails() {
  const { countryInfo, searchPerformed, error } = useContext(DataContext);

  return (
    <div className="display-container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div
          className="card"
          style={searchPerformed ? { opacity: 1 } : { opacity: 0 }}
        >
          {countryInfo && countryInfo.length > 0 && (
            <>
              <div className="image-container">
                <img src={countryInfo[0]?.flags.svg} alt="" />
              </div>
              <div className="details-container">
                <h3 className="name">{countryInfo[0]?.name.official}</h3>
                <p className="capital">
                  🏙 Capital: {countryInfo[0]?.capital[0]}
                </p>
                <p className="continent">
                  🗺 Continent: {countryInfo[0]?.continents[0]}
                </p>
                <p className="currency">
                  💰 Currency:{" "}
                  {Object.values(countryInfo[0]?.currencies)[0]?.name}
                  {Object.values(countryInfo[0].currencies)[0].symbol}
                </p>
                <p className="language">
                  🗣 Language: {Object.values(countryInfo[0]?.languages)[0]}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CountriesDetails;
