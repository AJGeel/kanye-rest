import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
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
