import Flex from "../Flex";
import Nav from "../Nav";
import Head from "next/head";
import styled from "styled-components";
import { Blinker } from "@next/font/google";

const StyledMain = styled.main`
  margin-bottom: 6rem;
`;

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function MainLayout({ mainUser, children }) {
  if (!mainUser._id) {
    return (
      <>
        <Head>
          <title>Star Wars Bazaar</title>
        </Head>
        <StyledMain className={blinker.className}>{children}</StyledMain>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Star Wars Bazaar</title>
      </Head>
      <StyledMain className={blinker.className}>{children}</StyledMain>
      <Flex justifyContent="center">
        <Nav />
      </Flex>
    </>
  );
}
