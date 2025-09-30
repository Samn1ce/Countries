import { createContext } from "react";
import { Country } from "./SelectedCountry";

type CountriesContextType = {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

export const CountriesContext = createContext<CountriesContextType>({
  countries: [],
  setCountries: () => {},
});
