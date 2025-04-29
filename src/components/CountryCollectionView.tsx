import { useContext } from "react";
import { Country, SelectedCountryContext } from "../context/SelectedCountry";
import { StepContext } from "../context/StepContext";

export default function CountryCollectionView({
  countries,
}: {
  countries: Country[];
}) {
  const { setSelectedCountry } = useContext(SelectedCountryContext);
  const { setStep } = useContext(StepContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
      {/* Country Card Template */}
      {countries.map((country: Country, index: number) => (
        <div
          key={index}
          onClick={() => {
            setSelectedCountry(country);
            setStep(2); // move to detail step
          }}
          className="bg-[rgb(43,55,67)] rounded-lg overflow-hidden shadow-md"
        >
          <div className="w-full h-48 overflow-hidden">
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">{country.name.common}</h2>
            <p className="text-sm mb-1">
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p className="text-sm mb-1">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
