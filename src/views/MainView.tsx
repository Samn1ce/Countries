import { useState, useContext } from "react";
import { StepContext } from "../context/StepContext";
import IconBack from "../components/icons/IconBack";
import CountryCollectionView from "../components/CountryCollectionView";
import CountryDetailView from "../components/CountryDetailView";
import IconDown from "../components/icons/IconDown";

export default function MainView() {
  const [dropdownRegion, setDropdownRegion] = useState(false);
  const { step, setStep } = useContext(StepContext);

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <StepContext.Provider value={{ step, setStep }}>
      <div className="min-h-screen bg-[#202D36] text-zinc-50">
        {/* Header */}
        <header className="w-full h-16 bg-[#2b3743] shadow-md">
          <div className="container mx-auto px-4 h-full flex items-center">
            <h1 className="text-xl font-bold">Where in the world?</h1>
          </div>
        </header>

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
                  <div className="hover:bg-blue-500 px-5 py-1 cursor-pointer">
                    Africa
                  </div>
                  <div className="hover:bg-blue-500 px-5 py-1 cursor-pointer">
                    America
                  </div>
                  <div className="hover:bg-blue-500 px-5 py-1 cursor-pointer">
                    Asia
                  </div>
                  <div className="hover:bg-blue-500 px-5 py-1 cursor-pointer">
                    Europe
                  </div>
                  <div className="hover:bg-blue-500 px-5 py-1 cursor-pointer">
                    Oceania
                  </div>
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
            <CountryCollectionView />
          ) : step === 2 ? (
            <CountryDetailView />
          ) : (
            "Can't Load Now. Refresh!"
          )}
        </main>
      </div>
    </StepContext.Provider>
  );
}
