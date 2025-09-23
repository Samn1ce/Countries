import { useState } from "react";
import MainView from "../src/views/MainView";
import { SelectedCountryContext, Country } from "./context/SelectedCountry";
import { CountriesContext } from "./context/Countries";
import { StepContext } from "./context/StepContext";

function App() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [step, setStep] = useState<number>(1);
  const [countries, setCountries] = useState<object[]>([]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      <SelectedCountryContext.Provider
        value={{ selectedCountry, setSelectedCountry }}
      >
        <StepContext.Provider value={{ step, setStep }}>
          <MainView />
        </StepContext.Provider>
      </SelectedCountryContext.Provider>
    </CountriesContext.Provider>
  );
}

export default App;
