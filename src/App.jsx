import Form from "./components/Form";
import DisplayCountries from "./components/DisplayCountries";

function App() {
  return (
    <>
      <h1>The Countries App 🌍</h1>
      <p className="info">
        Click on a country to see details in the right box or enter country name
        in search box
      </p>
      <Form />
      <DisplayCountries />
    </>
  );
}

export default App;
