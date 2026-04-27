import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans, fontDisplay } from "@/config/fonts";

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head />
      <body
        className={clsx(
          "min-h-screen overflow-x-hidden font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
