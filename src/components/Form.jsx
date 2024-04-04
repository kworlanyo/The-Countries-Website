import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Form() {
  const { setInput, setFilterCountries, handleSearch, input } =
    useContext(DataContext);

  function handleChange(e) {
    setInput(e.target.value);
    setFilterCountries(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();

    setInput("");
    setFilterCountries("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="country"
        id="country"
        value={input}
        placeholder="Enter country name here..."
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}

export default Form;
