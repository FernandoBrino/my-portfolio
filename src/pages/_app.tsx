import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { MenuMobileContextProvider } from "@/contexts/MenuMobileContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuMobileContextProvider>
      <Component {...pageProps} />
    </MenuMobileContextProvider>
  );
}
