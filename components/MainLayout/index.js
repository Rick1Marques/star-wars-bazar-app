import Flex from "../Layout/Flex";
import Nav from "../Nav";
import Head from "next/head";

export default function MainLayout({ mainUser }) {
  if (!mainUser) {
    return (
      <>
        <Head>
          <title>Star Wars Bazar</title>
        </Head>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Star Wars Bazar</title>
      </Head>
      <Flex justifyContent="center">
        <Nav />
      </Flex>
    </>
  );
}
