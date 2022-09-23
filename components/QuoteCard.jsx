import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

function KanyePFP({}) {
  return (
    <div
      className="w-52 h-52 rounded-full bg-center bg-cover flex-shrink-0 shadow-white/10 shadow-lg"
      style={{ backgroundImage: "url('/images/kanye-pfp.jpg')" }}
    />
  );
}

export default function QuoteCard({ quote }) {
  return (
    <div className=" border-black rounded-md max-w-5xl flex items-center w-full space-x-14 text-white">
      <KanyePFP />
      <div className="space-y-4">
        <h1 className="text-2xl leading-normal">"{quote.quote}"</h1>
        <div className="flex items-center space-x-4">
          <p className="uppercase tracking-wide font-medium opacity-70">
            Kanye West
          </p>
        </div>
      </div>
    </div>
  );
}
