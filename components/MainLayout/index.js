import Flex from "../Layout/Flex";
import Nav from "../Nav";
import Head from "next/head";

export default function MainLayout() {
  return (
    <>
      <Head>
        <title>Star Wars Bazar</title>
      </Head>
      <Flex justifyContent="center">{/* <Nav /> */}</Flex>
    </>
  );
}
