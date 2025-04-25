import { createContext } from "react";

type CountriesContextType = {
  countries: Array<object>;
  setCountries: React.Dispatch<React.SetStateAction<number>>;
};

export const CountriesContext = createContext<CountriesContextType | null>(
  null
);
