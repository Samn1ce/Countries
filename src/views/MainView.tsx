import { useState, useContext, useEffect } from "react";
import { StepContext } from "../context/StepContext";
import IconBack from "../components/icons/IconBack";
import CountryCollectionView from "../components/CountryCollectionView";
import CountryDetailView from "../components/CountryDetailView";
import IconDown from "../components/icons/IconDown";
import { fetchAllCountries } from "../api/restcountries";
import { CountriesContext } from "../context/Countries";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

export default function MainView() {
  const [dropdownRegion, setDropdownRegion] = useState(false);
  const [filter, setFilter] = useState("Africa");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { step, setStep } = useContext(StepContext);
  const { countries, setCountries } = useContext(CountriesContext);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchAllCountries();
        setCountries(data);
      } catch (error) {
        setError("Failed to load countries. " + error);
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, [setCountries]);

  const filteredCountries = countries.filter((country) =>
    filter ? country.region.toLowerCase() === filter.toLowerCase() : true
  );

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="min-h-screen bg-[#202D36] text-zinc-50">
          <Header />
          {/* Main Content */}
          <div className="container mx-auto px-4 pt-12">
            {/* Back Button */}
            {step === 1 ? (
              <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="relative w-full md:w-96">
                  {/* <Search /> */}
                  <input
                    type="text"
                    placeholder="Search for a country..."
                    className="w-full h-12 pl-10 pr-4 bg-[#2b3743] rounded-md text-white placeholder-gray-300 focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <div
                    onClick={() => setDropdownRegion(!dropdownRegion)}
                    className="mb-1 h-12 text-xs bg-[#2b3743] rounded-md flex gap-8 justify-between items-center px-5 cursor-pointer"
                  >
                    <p>Filter by Region</p>
                    <IconDown />
                  </div>
                  <div
                    onClick={() => setDropdownRegion(false)}
                    className={`absolute w-full bg-[#2b3743] rounded-md text-xs  flex flex-col gap-2 py-3 ${
                      dropdownRegion ? "block" : "hidden"
                    }`}
                  >
                    {["Africa", "America", "Asia", "Europe", "Oceania"].map(
                      (region) => (
                        <div
                          key={region}
                          onClick={() => setFilter(region)}
                          className="hover:bg-blue-500 px-5 py-1 cursor-pointer capitalize"
                        >
                          {region}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : step === 2 ? (
              <button
                onClick={() => {
                  if (step === 2) {
                    handleBack();
                  }
                }}
                className="flex items-center gap-2 mb-16 bg-[#2b3743] px-6 py-2 rounded-md shadow-md"
              >
                <IconBack />
                Back
              </button>
            ) : (
              "Can't Load Now. Refresh!"
            )}
          </div>

          <main className="container mx-auto px-4">
            {step === 1 ? (
              <CountryCollectionView countries={filteredCountries} />
            ) : step === 2 ? (
              <CountryDetailView />
            ) : (
              "Can't Load Now. Refresh!"
            )}
          </main>
        </div>
      )}
    </StepContext.Provider>
  );
}
