import Flex from "../Layout/Flex";
import Nav from "../Nav";
import Head from "next/head";

export default function MainLayout({ mainUser }) {
  if (!mainUser._id) {
    return (
      <>
        <Head>
          <title>Star Wars Bazaar</title>
        </Head>
      </>
    );
  }
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
