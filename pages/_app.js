import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { Blinker } from "@next/font/google";
import MainLayout from "@/components/Layout/MainLayout";
import styled from "styled-components";
import useUser from "@/hooks/useUser";

export default function App({ Component, pageProps }) {
  const { mainUser, mainTheme } = useUser();
  if (!mainUser) {
    return "Loading";
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <MainLayout mainUser={mainUser} mainTheme={mainTheme}>
        <GlobalStyle />
        <Component {...pageProps} mainUser={mainUser} />
      </MainLayout>
    </SWRConfig>
  );
}
