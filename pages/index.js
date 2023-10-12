import Experience from "@/components/threeJs/Experience/Experience";
import { Canvas } from "@react-three/fiber";

export default function HomePage() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}
