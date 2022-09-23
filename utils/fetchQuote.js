export async function fetchQuote() {
  const res = await fetch("https://api.kanye.rest");
  const data = await res.json();
  return data;
}
