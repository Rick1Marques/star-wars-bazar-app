import { OrbitControls } from "@react-three/drei";
import Universe from "@/Utilities";
import Stars from "../components/Stars";
import Planets from "../components/Planets";
import PlanetWithRing from "../components/PlanetWithRing";
import Galaxy from "../components/Galaxy";
import Starships from "../components/Starships";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import DeathStar from "../components/DeathStar";

export default function Experience() {
  const { bigGroupRadius, angle } = Universe();

  const bigGroupRef = useRef();
  const StarshipsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    bigGroupRef.current.rotation.y = elapsedTime * 0.03;

    StarshipsRef.current.rotation.y = elapsedTime * 0.5;
    StarshipsRef.current.rotation.x = elapsedTime * 0.2;
  });

  return (
    <>
      <OrbitControls />
      <pointLight intensity={1} />

      <Stars />
      <group ref={bigGroupRef}>
        <Planets />
        <PlanetWithRing />
        <Galaxy />
        <DeathStar />
        <group ref={StarshipsRef}>
          <Starships />
        </group>
      </group>
    </>
  );
}
