import { createContext } from "react";

type CountriesContextType = {
  countries: Array<object>;
  setCountries: React.Dispatch<React.SetStateAction<object[]>>;
};

export const CountriesContext = createContext<CountriesContextType | null>({
  countries: [],
  setCountries: () => {},
});
