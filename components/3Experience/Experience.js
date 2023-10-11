import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta;
  });
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={0.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          position={[1, 1, 1]}
          rotation-y={Math.PI * 0.5}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </group>
    </>
  );
}
