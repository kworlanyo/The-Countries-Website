/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [countryInfo, setCountryInfo] = useState({});
  const [input, setInput] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [filterCountries, setFilterCountries] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAllData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const info = await response.json();
          const countryNames = info
            .map((country) => country.name.common)
            .sort();
          setData(countryNames);
          setIsLoading(false);
          setError("");
        } else {
          throw new Error(`Sorry we don't have that country`);
        }
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }
    fetchAllData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (countryName.length > 0) {
          const url = `https://restcountries.com/v3.1/name/${countryName
            .split(". ")
            .slice(1)
            .join(" ")}?fullText=true`;

          const response = await fetch(url);

          if (response.ok) {
            const data2 = await response.json();
            setCountryInfo(data2);
            setSearchPerformed(true);
            setError("");
          } else {
            throw new Error("Data fetching failed. Try again");
          }
        }
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }

    fetchData();
  }, [countryName]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${input}`
      );

      if (response.ok) {
        const data2 = await response.json();
        setCountryInfo(data2);
        setSearchPerformed(true);
        setError("");
      } else {
        throw new Error("Data fetching failed. Try again");
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        setInput,
        input,
        handleSearch,
        setFilterCountries,
        data,
        setCountryName,
        countryInfo,
        searchPerformed,
        filterCountries,
        isLoading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
