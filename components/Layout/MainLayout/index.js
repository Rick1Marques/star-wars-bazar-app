import Flex from "../Flex";
import Nav from "../Nav";
import Head from "next/head";

export default function MainLayout() {
  return (
    <>
      <Head>
        <title>Star Wars Bazaar</title>
      </Head>
      <Flex justifyContent="center">
        <Nav />
      </Flex>
    </>
  );
}
