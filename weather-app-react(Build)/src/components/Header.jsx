export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          SkyCast{" "}
          <span className="text-sky-400">
            Pro
          </span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base mt-1">
          Professional weather insights powered by OpenWeather API.
        </p>
      </div>

      <div className="flex items-center gap-3 text-xs md:text-sm text-slate-400">
        <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700">
          React + Vite
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700">
          Tailwind CSS
        </span>
        <span className="hidden sm:inline px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700">
          OpenWeather REST API
        </span>
      </div>
    </header>
  );
}
