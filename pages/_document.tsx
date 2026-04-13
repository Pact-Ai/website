import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans, fontDisplay } from "@/config/fonts";

export default function Document() {
  return (
    <Html className="light" lang="en">
      <Head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
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
