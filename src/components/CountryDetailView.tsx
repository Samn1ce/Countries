import { useState, useEffect } from "react";
import { fetchAllCountries } from "../api/restcountries";

export default function CountryDetailView() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchAllCountries();
        return setSelectedCountry(data);
      } catch (err) {
        setError("Failed to load countries");
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Flag Section */}
      <div className="w-full aspect-video">
        <img
          src="https://flagcdn.com/w320/be.png"
          alt="Belgium Flag"
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
