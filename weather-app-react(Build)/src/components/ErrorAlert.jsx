export default function ErrorAlert({ message }) {
  return (
    <div className="rounded-xl border border-red-500/60 bg-red-950/40 text-red-100 px-3 py-2 text-xs md:text-sm flex items-start gap-2">
      <span className="mt-0.5 text-red-400">!</span>
      <p>{message}</p>
    </div>
  );
}
