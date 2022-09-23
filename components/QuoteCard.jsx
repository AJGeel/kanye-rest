function KanyePFP({ imgSrc }) {
  const pfpBaseStyle = `w-32 h-32 sm:w-52 sm:h-52 rounded-full bg-center bg-cover flex-shrink-0 shadow-white/10 shadow-lg`;

  return (
    <div className="relative">
      <div className={pfpBaseStyle} style={{ backgroundImage: imgSrc }} />
      <div
        className={
          pfpBaseStyle +
          ` absolute top-0 animate-pulse mix-blend-screen opacity-10 blur-lg`
        }
        style={{ backgroundImage: imgSrc }}
      />
    </div>
  );
}

export default function QuoteCard({ quote }) {
  return (
    <div className="max-w-5xl flex flex-col sm:flex-row items-center w-full space-y-10 sm:space-y-0 sm:space-x-14 text-white">
      <KanyePFP imgSrc="url('/images/kanye-pfp.jpg')" />
      <div className="space-y-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl sm:leading-normal font-['Bree_serif']">
          "{quote.quote}"
        </h1>
        <p className="uppercase tracking-wide text-sm font-medium opacity-70">
          — Kanye west
        </p>
      </div>
    </div>
  );
}
