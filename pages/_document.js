import { Html, Head, Main, NextScript } from "next/document";

function SEOInfo() {
  const title = "Profound wisdom by Kanye West";
  const desc =
    "Kanye West is an American rapper and record producer, but did you also know that he's full of unconventional wisdom? You do now. 🧠";
  const imgSrc = "/images/kanye-pfp.jpg";
  const siteUrl = "https://west-needs-rest.netlify.app";

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
      <link rel="shortcut icon" href={imgSrc} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={imgSrc} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={imgSrc} />
    </>
  );
}

export default function Document() {
  return (
    <Html>
      <Head>
        <SEOInfo />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-b from-[#1a2fb4] to-[#000a79]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
