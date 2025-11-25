// src/App.jsx
import { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import WeatherHighlights from "./components/WeatherHighlights";
import ErrorAlert from "./components/ErrorAlert";
import Footer from "./components/Footer";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = async (queryCity) => {
    if (!queryCity.trim()) return;

    if (!API_KEY) {
      setErrorMsg("Missing OpenWeather API key. Check your .env file.");
      return;
    }

    setCity(queryCity);
    setLoading(true);
    setErrorMsg("");
    setWeather(null);

    try {
      const url = `${BASE_URL}?q=${encodeURIComponent(
        queryCity
      )}&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("City not found. Try another name.");
        } else {
          throw new Error("Failed to fetch weather. Please try again.");
        }
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Header />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <SearchBar onSearch={handleSearch} loading={loading} />

          {errorMsg && <ErrorAlert message={errorMsg} />}

          <CurrentWeatherCard
            weather={weather}
            loading={loading}
            city={city}
          />
        </div>

        <WeatherHighlights weather={weather} loading={loading} />
      </div>

      <Footer />
    </Layout>
  );
}

export default App;
