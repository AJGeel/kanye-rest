function KanyePFP({}) {
  const pfpBaseStyle = `w-52 h-52 rounded-full bg-center bg-cover flex-shrink-0 shadow-white/10 shadow-lg`;
  const pfpURL = `url('/images/kanye-pfp.jpg')`;

  return (
    <div className="relative">
      <div className={pfpBaseStyle} style={{ backgroundImage: pfpURL }} />
      <div
        className={
          pfpBaseStyle +
          ` absolute top-0 animate-pulse mix-blend-screen opacity-10 blur-lg`
        }
        style={{ backgroundImage: pfpURL }}
      />
    </div>
  );
}

export default function QuoteCard({ quote }) {
  return (
    <div className="max-w-5xl flex flex-col sm:flex-row items-center w-full space-y-10 sm:space-y-0 sm:space-x-14 text-white">
      <KanyePFP />
      <div className="space-y-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl sm:leading-snug font-['Bree_serif']">
          "{quote.quote}"
        </h1>
        <p className="uppercase tracking-wide text-sm font-medium opacity-70">
          — Kanye west
        </p>
      </div>
    </div>
  );
}
