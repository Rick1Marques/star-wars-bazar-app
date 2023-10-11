import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  useFrame(() => {});
  return (
    <>
      <mesh position={[1, 1, 1]} rotation-y={Math.PI * 0.5} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
}
