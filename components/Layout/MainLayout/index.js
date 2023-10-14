import Flex from "../Flex";
import Nav from "../Nav";
import Head from "next/head";
import styled from "styled-components";
import { Blinker } from "@next/font/google";
import { Canvas } from "@react-three/fiber";
import Universe from "@/Utilities";
import Stars from "@/components/threeJs/components/Stars";

const StyledMain = styled.main`
  margin-bottom: 6rem;
`;

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function MainLayout({ mainUser, children }) {
  const { bigGroupRadius } = Universe();
  if (!mainUser._id) {
    return (
      <>
        <Head>
          <title>Star Wars Bazaar</title>
        </Head>
        <StyledMain className={blinker.className}>
          <div className="space-background">
            <Canvas
              camera={{
                fov: 45,
                position: [0, 0, 5 * bigGroupRadius],
              }}
            >
              <Stars />
            </Canvas>
          </div>

          {children}
        </StyledMain>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Star Wars Bazaar</title>
      </Head>

      <StyledMain className={blinker.className}>
        <div className="space-background">
          <Canvas
            camera={{
              fov: 45,
              position: [0, 0, 5 * bigGroupRadius],
            }}
          >
            <Stars />
          </Canvas>
        </div>
        {children}
      </StyledMain>
      <Flex justifyContent="center">
        <Nav />
      </Flex>
    </>
  );
}
