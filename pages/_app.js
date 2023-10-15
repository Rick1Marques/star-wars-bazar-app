import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import MainLayout from "@/components/Layout/MainLayout";
import useUser from "@/hooks/useUser";

export default function App({ Component, pageProps }) {
  const { mainUser, mainTheme } = useUser();
  if (!mainUser) {
    return <div>Loading</div>;
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
