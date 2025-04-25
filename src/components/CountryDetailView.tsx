import { useState, useEffect, useContext } from "react";
import { fetchAllCountries } from "../api/restcountries";
import { SelectedCountryContext } from "../context/SelectedCountry";

export default function CountryDetailView() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { selectedCountry, setSelectedCountry } = useContext(
    SelectedCountryContext
  );

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchAllCountries();
        return setSelectedCountry(data);
      } catch (error) {
        setError("Failed to load countries" + error);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, []);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>{error}</p>;

  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
    borders,
  } = selectedCountry;

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Flag Section */}
      <div className="w-full aspect-video">
        <img
          src={flags.png}
          alt={flags.alt}
          className="w-full h-full object-cover shadow-lg"
        />
      </div>

      {/* Country Information */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Belgium</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            <p className="text-sm mb-2">
              <span className="font-semibold">Native Name:</span> België
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Population:</span> 11,319,511
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Region:</span> Europe
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Sub Region:</span> Western Europe
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Capital:</span> Brussels
            </p>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-sm mb-2">
              <span className="font-semibold">Top Level Domain:</span> .be
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Currencies:</span> Euro
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Languages:</span> Dutch, French,
              German
            </p>
          </div>
        </div>

        {/* Border Countries */}
        <div className="mt-8">
          <p className="text-sm font-semibold mb-4">Border Countries:</p>
          <div className="flex flex-wrap gap-2">
            {["France", "Germany", "Netherlands"].map((country) => (
              <button
                key={country}
                className="bg-[#2b3743] px-4 py-1 rounded-md text-sm shadow-md"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
