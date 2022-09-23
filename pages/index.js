import QuoteCard from "../components/QuoteCard";
import Refresh from "../components/Refresh";
import { useState } from "react";
import { fetchQuote } from "../utils/fetchQuote";

export default function Home({ data }) {
  const initialQuote = data;
  const [quote, setQuote] = useState(initialQuote);

  const updateQuote = async () => {
    const data = await fetchQuote();
    setQuote(data);
  };

  return (
    <div className="min-h-screen h-full flex flex-col space-y-4 items-center sm:justify-center p-8 pt-16">
      <QuoteCard quote={quote} />
      <Refresh onClick={updateQuote} />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetchQuote();

  return {
    props: {
      data,
    },
  };
}
