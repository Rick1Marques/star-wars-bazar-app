import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import Universe from "@/Utilities";

export default function Planets() {
  const { bigGroupRadius, angle } = Universe();

  // Texture

  const planet1Texture = useTexture("./textures/2k_ceres_fictional.jpg");
  const planet2Texture = useTexture("./textures/2k_haumea_fictional.jpg");
  const planet3Texture = useTexture("./textures/2k_venus_surface.jpg");
  const planet4Texture = useTexture("./textures/2k_jupiter.jpg");
  const planet5Texture = useTexture("./textures/2k_sun.jpg");

  // Position

  const planet1Position = {
    x: bigGroupRadius * Math.sin(angle(0)) * 0.9,
    y: bigGroupRadius * 0.35,
    z: bigGroupRadius * Math.cos(angle(0)) * 0.9,
  };
  const planet2Position = {
    x: bigGroupRadius * Math.sin(angle(4)) * 1.2,
    y: bigGroupRadius * -0.25,
    z: bigGroupRadius * Math.cos(angle(4)) * 1.2,
  };
  const planet3Position = {
    x: bigGroupRadius * Math.sin(angle(2)) * 1.4,
    y: bigGroupRadius * 0.4,
    z: bigGroupRadius * Math.cos(angle(2)) * 1.4,
  };
  const planet4Position = {
    x: bigGroupRadius * Math.sin(angle(1)) * 1.1,
    y: bigGroupRadius * -0.35,
    z: bigGroupRadius * Math.cos(angle(1)) * 1.1,
  };

  // Animation

  const planet1Ref = useRef();
  const planet2Ref = useRef();
  const planet3Ref = useRef();
  const planet4Ref = useRef();
  const planet5Ref = useRef();

  useFrame((state, delta) => {
    planet1Ref.current.rotation.y += delta * 0.1;
    planet2Ref.current.rotation.y += delta * 0.09;
    planet3Ref.current.rotation.y += delta * 0.08;
    planet4Ref.current.rotation.y += delta * 0.11;
    planet5Ref.current.rotation.y += delta * 0.05;
  });
  return (
    <>
      <mesh
        ref={planet1Ref}
        position={[planet1Position.x, planet1Position.y, planet1Position.z]}
        scale={2.8}
      >
        <sphereGeometry />
        <meshStandardMaterial map={planet1Texture} />
      </mesh>
      <mesh
        ref={planet2Ref}
        position={[planet2Position.x, planet2Position.y, planet2Position.z]}
        scale={4.4}
      >
        <sphereGeometry />
        <meshStandardMaterial map={planet2Texture} />
      </mesh>
      <mesh
        ref={planet3Ref}
        position={[planet3Position.x, planet3Position.y, planet3Position.z]}
        scale={5}
      >
        <sphereGeometry />
        <meshStandardMaterial map={planet3Texture} />
      </mesh>
      <mesh
        ref={planet4Ref}
        position={[planet4Position.x, planet4Position.y, planet4Position.z]}
        scale={2.6}
      >
        <sphereGeometry />
        <meshStandardMaterial map={planet4Texture} />
      </mesh>
      <mesh ref={planet5Ref} position={[0, 0, 0]} scale={18}>
        <sphereGeometry />
        <meshBasicMaterial map={planet5Texture} />
      </mesh>
    </>
  );
}
