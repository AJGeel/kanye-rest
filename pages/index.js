import QuoteCard from "../components/QuoteCard";
import Refresh from "../components/Refresh";
import { useState } from "react";

export default function Home({ data }) {
  const initialQuote = data;
  const [quote, setQuote] = useState(initialQuote);

  const fetchQuote = async () => {
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json();
    setQuote(data);
  };

  return (
    <div className="min-h-screen h-full flex flex-col space-y-4 items-center sm:justify-center p-8 pt-16">
      <QuoteCard quote={quote} />
      <Refresh onClick={fetchQuote} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.kanye.rest");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
