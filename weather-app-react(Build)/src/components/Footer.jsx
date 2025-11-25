// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="pt-2 border-t border-slate-800 mt-2">
      <p className="text-[10px] md:text-xs text-slate-500 text-center">
        Powered by{" "}
        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noreferrer"
          className="text-sky-400 hover:underline"
        >
          OpenWeather
        </a>{" "}
        • Built with React, Vite & Tailwind CSS
      </p>
    </footer>
  );
}
