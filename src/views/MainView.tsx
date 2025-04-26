import { useContext } from "react";
import { StepContext } from "../context/StepContext";
import IconBack from "../components/icons/IconBack";
import CountryCollectionView from "../components/CountryCollectionView";
import CountryDetailView from "../components/CountryDetailView";

export default function MainView() {
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
        <div
          onClick={() => {
            if (step === 2) {
              handleBack();
            }
          }}
          className="container mx-auto px-4 py-12"
        >
          {/* Back Button */}
          {step === 1 ? (
            <div className="relative w-96">
              {/* <Search /> */}
              <input
                type="text"
                placeholder="Search for a country..."
                className="w-full h-12 pl-10 pr-4 bg-[#2b3743] rounded-md text-white placeholder-gray-300 focus:outline-none"
              />
            </div>
          ) : step === 2 ? (
            <button className="flex items-center gap-2 mb-16 bg-[#2b3743] px-6 py-2 rounded-md shadow-md">
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
