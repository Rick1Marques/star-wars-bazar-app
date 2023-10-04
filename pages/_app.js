import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { Blinker } from "@next/font/google";
import MainLayout from "@/components/MainLayout";
import styled from "styled-components";
import useUser from "@/hooks/useUser";

const StyledMain = styled.main`
  margin-bottom: 6rem;
`;

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function App({ Component, pageProps }) {
  const { mainUser } = useUser();

  return (
    <StyledMain className={blinker.className}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} mainUser={mainUser} />
        <MainLayout />
      </SWRConfig>
    </StyledMain>
  );
}
