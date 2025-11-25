import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [localCity, setLocalCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localCity);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 items-stretch"
    >
      <input
        type="text"
        placeholder="Search city (e.g., Delhi, London, New York)"
        value={localCity}
        onChange={(e) => setLocalCity(e.target.value)}
        className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70 text-sm md:text-base placeholder:text-slate-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed font-medium text-sm md:text-base shadow-lg shadow-sky-900/60 transition-colors"
      >
        {loading ? "Searching..." : "Get Weather"}
      </button>
    </form>
  );
}
