import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { Blinker } from "@next/font/google";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={blinker.className}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </main>
  );
}
