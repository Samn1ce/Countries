import { createContext } from "react";

export type Country = {
  name: {
    common: string;
    nativeName?: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  flags: {
    png: string;
    alt?: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [code: string]: string;
  };
  borders?: string[];
};

export type SelectedCountryContextType = {
  selectedCountry: Country | null; // either a Country or null
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
};

export const SelectedCountryContext = createContext<SelectedCountryContextType>(
  {
    selectedCountry: null,
    setSelectedCountry: () => {},
  }
);
