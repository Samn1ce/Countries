import { createContext } from "react";

export type Country = {
  name: { common: string };
  flags: { png: string; alt?: string };
  population: number;
  region: string;
  capital?: string[];
};

export type SelectedCountryContextType = {
  selectedCountry: Country | null; // either a Country or null
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
};

export const SelectedCountryContext =
  createContext<SelectedCountryContextType | null>(null);
