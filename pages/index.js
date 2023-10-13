import Experience from "@/components/threeJs/Experience/Experience";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import styled from "styled-components";
import Universe from "@/Utilities";

const StyledAppTitle = styled.h1`
  z-index: 1;
  color: var(--primary-title-color);
  font-size: 2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  text-wrap: nowrap;
  margin-top: 1rem;
`;

const StyledText = styled.p`
  z-index: 1;
  color: var(--primary-title-color);
  font-size: 0.8rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  text-wrap: nowrap;
  margin-top: 3.5rem;
`;
const StyledLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-decoration: none;
`;
const StyledBoxLink = styled.div`
  width: 40px;
  height: 40px;
`;

export default function HomePage() {
  const { bigGroupRadius } = Universe();
  return (
    <>
      <div className="space-background">
        <StyledAppTitle>Star Wars Bazaar</StyledAppTitle>
        <StyledText>Touch the sun to pick your character</StyledText>
        <StyledLink className="link-login-page" href="my-profile">
          <StyledBoxLink></StyledBoxLink>
        </StyledLink>

        <Canvas
          camera={{
            fov: 45,
            position: [0, 0, 1.2 * bigGroupRadius],
          }}
        >
          <Experience />
        </Canvas>
      </div>
    </>
  );
}
