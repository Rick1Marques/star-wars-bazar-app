import Experience from "@/components/threeJs/Experience/Experience";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import styled from "styled-components";
import Universe from "@/Utilities";

const StyledAppTitle = styled.h1`
  z-index: 1;
  color: #fcff69;
  font-size: 2rem;
  font-weight: 500;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  text-wrap: nowrap;
  margin-top: 2rem;
  width: 100%;
  text-align: center;
`;

const StyledTextTop = styled.p`
  z-index: 1;
  color: #fcff69;
  font-size: 0.8rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  text-wrap: nowrap;
  margin-top: 4.5rem;
`;

const StyledTextBottomOne = styled.p`
  z-index: 1;
  color: #fcff69;
  font-size: 0.8rem;
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%, 0%);
  text-wrap: nowrap;
  margin-bottom: 4.5rem;
`;
const StyledTextBottomTwo = styled.p`
  z-index: 1;
  color: #fcff69;
  font-size: 0.8rem;
  position: absolute;
  left: 50%;
  top: 88%;
  transform: translate(-50%, 0%);
  text-wrap: nowrap;
  margin-bottom: 4.5rem;
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
        <StyledTextTop>Tap the sun to pick your character</StyledTextTop>
        <StyledTextBottomOne>Drag to explore the universe</StyledTextBottomOne>
        <StyledTextBottomTwo>Pinch/spread to zoom in/out</StyledTextBottomTwo>
        <StyledLink className="link-login-page" href="select-character">
          <StyledBoxLink></StyledBoxLink>
        </StyledLink>

        <Canvas
          camera={{
            fov: 45,
            position: [0, 0, 5 * bigGroupRadius],
          }}
        >
          <Experience />
        </Canvas>
      </div>
    </>
  );
}
