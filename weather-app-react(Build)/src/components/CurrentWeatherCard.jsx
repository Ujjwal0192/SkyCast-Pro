function formatDate(timestamp, timezoneOffset) {
  if (!timestamp || timezoneOffset === undefined) return "";
  const local = (timestamp + timezoneOffset) * 1000;
  return new Date(local).toLocaleString(undefined, {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CurrentWeatherCard({ weather, loading, city }) {
  const temp = weather?.main?.temp;
  const feelsLike = weather?.main?.feels_like;
  const desc = weather?.weather?.[0]?.description;
  const icon = weather?.weather?.[0]?.icon;
  const name = weather?.name;
  const country = weather?.sys?.country;
  const dt = weather?.dt;
  const tz = weather?.timezone;

  return (
    <section className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 md:p-6 shadow-lg space-y-4">
      <div className="flex justify-between items-start gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            Current weather
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mt-1">
            {name ? `${name}, ${country}` : city || "Search a city"}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {weather
              ? `Updated • ${formatDate(dt, tz)}`
              : "Type a city name to view live weather data."}
          </p>
        </div>

        {icon && (
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather icon"
            className="w-16 h-16 md:w-20 md:h-20"
          />
        )}
      </div>

      {loading && (
        <div className="animate-pulse mt-4">
          <div className="h-8 w-24 bg-slate-800 rounded-lg mb-2" />
          <div className="h-4 w-40 bg-slate-800 rounded-lg" />
        </div>
      )}

      {!loading && weather && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
          <div>
            <p className="text-4xl md:text-5xl font-bold">
              {Math.round(temp)}°C
            </p>
            <p className="capitalize text-sm md:text-base text-slate-300">
              {desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-slate-300">
            <div className="bg-slate-800/70 rounded-xl px-3 py-2">
              <p className="text-slate-400">Feels like</p>
              <p className="font-semibold">
                {Math.round(feelsLike)}°C
              </p>
            </div>
            <div className="bg-slate-800/70 rounded-xl px-3 py-2">
              <p className="text-slate-400">Pressure</p>
              <p className="font-semibold">
                {weather.main?.pressure} hPa
              </p>
            </div>
            <div className="bg-slate-800/70 rounded-xl px-3 py-2">
              <p className="text-slate-400">Min temp</p>
              <p className="font-semibold">
                {Math.round(weather.main?.temp_min)}°C
              </p>
            </div>
            <div className="bg-slate-800/70 rounded-xl px-3 py-2">
              <p className="text-slate-400">Max temp</p>
              <p className="font-semibold">
                {Math.round(weather.main?.temp_max)}°C
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
