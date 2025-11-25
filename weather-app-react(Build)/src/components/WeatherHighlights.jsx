function formatTime(timestamp, timezoneOffset) {
  if (!timestamp || timezoneOffset === undefined) return "--";
  const local = (timestamp + timezoneOffset) * 1000;
  return new Date(local).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function WeatherHighlights({ weather, loading }) {
  const wind = weather?.wind;
  const main = weather?.main;
  const sys = weather?.sys;
  const tz = weather?.timezone;

  return (
    <section className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 md:p-6 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-400">
          Today&apos;s highlights
        </p>
        <p className="text-[10px] text-slate-500">
          Detailed metrics
        </p>
      </div>

      {loading && (
        <div className="grid grid-cols-2 gap-3 mt-2 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-xl bg-slate-800"
            />
          ))}
        </div>
      )}

      {!loading && weather && (
        <div className="grid grid-cols-2 gap-3 mt-2 text-xs md:text-sm">
          <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2.5">
            <p className="text-slate-400">Humidity</p>
            <p className="text-lg font-semibold">
              {main?.humidity}% 
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2.5">
            <p className="text-slate-400">Wind</p>
            <p className="text-lg font-semibold">
              {wind?.speed} m/s
            </p>
            <p className="text-[10px] text-slate-500">
              Direction: {wind?.deg}°
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2.5">
            <p className="text-slate-400">Sunrise</p>
            <p className="text-lg font-semibold">
              {formatTime(sys?.sunrise, tz)}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2.5">
            <p className="text-slate-400">Sunset</p>
            <p className="text-lg font-semibold">
              {formatTime(sys?.sunset, tz)}
            </p>
          </div>
        </div>
      )}

      {!loading && !weather && (
        <p className="text-xs text-slate-500 mt-1">
          Highlights will appear here after you search for a city.
        </p>
      )}
    </section>
  );
}
