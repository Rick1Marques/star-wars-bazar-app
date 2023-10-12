import { OrbitControls } from "@react-three/drei";
import Universe from "@/Utilities";
import Stars from "../components/Stars";
import Planets from "../components/Planets";
import PlanetWithRing from "../components/PlanetWithRing";

export default function Experience() {
  const { bigGroupRadius, angle } = Universe();

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      {/* <Planets /> */}
      <Stars />
      <PlanetWithRing />
    </>
  );
}
