import Header from "./Header";

export default function Spinner() {
  return (
    <div className="h-screen bg-[#202D36] text-zinc-50">
      <Header />
      <div className="flex justify-center items-center w-full mt-60">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
