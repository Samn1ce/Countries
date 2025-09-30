import { useContext } from "react";
import { SelectedCountryContext } from "../context/SelectedCountry";

export default function CountryDetailView() {
  const { selectedCountry } = useContext(SelectedCountryContext);

  if (!selectedCountry) {
    return (
      <div className="text-center py-12">
        <p>No country selected</p>
      </div>
    );
  }

  // Extract the values safely with optional chaining
  const name = selectedCountry.name?.common || "Unknown";
  const population = selectedCountry.population?.toLocaleString() || "Unknown";
  const region = selectedCountry.region || "Unknown";
  const subregion = selectedCountry.subregion || "Unknown";
  const capital = selectedCountry.capital?.[0] || "Unknown";
  const tld = selectedCountry.tld?.[0] || "Unknown";

  // Handle potentially nested or complex properties
  const currencies = selectedCountry.currencies
    ? Object.values(selectedCountry.currencies)
        .map((currency: { name: string; symbol: string }) => currency.name)
        .join(", ")
    : "Unknown";

  const languages = selectedCountry.languages
    ? Object.values(selectedCountry.languages).join(", ")
    : "Unknown";

  const nativeName = selectedCountry.name?.nativeName
    ? Object.values(selectedCountry.name.nativeName)[0]?.common || name
    : name;

  const borderCountries = selectedCountry.borders || [];

  return (
    <div className="grid md:grid-cols-2 gap-12 pb-5 items-center">
      {/* Flag Section */}
      <div className="w-full aspect-video">
        <img
          src={selectedCountry.flags?.png}
          alt={selectedCountry.flags?.alt || `Flag of ${name}`}
          className="w-full h-full object-cover shadow-lg"
        />
      </div>

      {/* Country Information */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{name}</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            <p className="text-sm mb-2">
              <span className="font-semibold">Native Name:</span> {nativeName}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Population:</span> {population}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Sub Region:</span> {subregion}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-sm mb-2">
              <span className="font-semibold">Top Level Domain:</span> {tld}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Currencies:</span> {currencies}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Languages:</span> {languages}
            </p>
          </div>
        </div>

        {/* Border Countries */}
        <div className="mt-8">
          <p className="text-sm font-semibold mb-4">Border Countries:</p>
          <div className="flex flex-wrap gap-2">
            {borderCountries.length > 0 ? (
              borderCountries.map((border) => (
                <button
                  key={border}
                  className="bg-[#2b3743] px-4 py-1 rounded-md text-sm shadow-md"
                >
                  {border}
                </button>
              ))
            ) : (
              <p className="text-sm">No bordering countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
