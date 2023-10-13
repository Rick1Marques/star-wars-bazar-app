import { OrbitControls } from "@react-three/drei";
import Stars from "../components/Stars";
import Planets from "../components/Planets";
import PlanetWithRing from "../components/PlanetWithRing";
import Galaxy from "../components/Galaxy";
import Starships from "../components/Starships";
import { useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import DeathStar from "../components/DeathStar";
import Universe from "@/Utilities";

export default function Experience() {
  const { bigGroupRadius } = Universe();
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

      <pointLight intensity={1.5} color={"#FFDBCF"} />
      <Stars />
      <group ref={bigGroupRef} rotation-x={(20 * Math.PI) / 180}>
        <Planets />
        <PlanetWithRing />
        <Galaxy />
        <Suspense>
          <DeathStar />
        </Suspense>

        <group ref={StarshipsRef}>
          <Suspense>
            <Starships />
          </Suspense>
        </group>
      </group>
    </>
  );
}
