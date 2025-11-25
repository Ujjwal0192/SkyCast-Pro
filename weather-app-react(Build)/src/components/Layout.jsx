export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-sky-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="rounded-3xl bg-slate-900/60 border border-slate-700/60 shadow-2xl backdrop-blur-md p-6 md:p-8 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
