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

  const planet6Texture = useTexture("./textures/2k_eris_fictional.jpg");
  const planet7Texture = useTexture("./textures/2k_makemake_fictional.jpg");
  const planet8Texture = useTexture("./textures/2k_mercury.jpg");

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
  const planet6Position = {
    x: bigGroupRadius * Math.sin(angle(1.5)) * 1.9,
    y: bigGroupRadius * 0.7,
    z: bigGroupRadius * Math.cos(angle(1.5)) * 1.9,
  };
  const planet7Position = {
    x: bigGroupRadius * Math.sin(angle(3.5)) * 1.8,
    y: bigGroupRadius * -0.7,
    z: bigGroupRadius * Math.cos(angle(3.5)) * 1.8,
  };
  const planet8Position = {
    x: bigGroupRadius * Math.sin(angle(5.5)) * 2,
    y: bigGroupRadius * 1.2,
    z: bigGroupRadius * Math.cos(angle(5.5)) * 2,
  };

  // Animation

  const planet1Ref = useRef();
  const planet2Ref = useRef();
  const planet3Ref = useRef();
  const planet4Ref = useRef();
  const planet5Ref = useRef();
  const planet6Ref = useRef();
  const planet7Ref = useRef();
  const planet8Ref = useRef();

  useFrame((state, delta) => {
    planet1Ref.current.rotation.y += delta * 0.15;
    planet2Ref.current.rotation.y += delta * 0.12;
    planet3Ref.current.rotation.y += delta * 0.1;
    planet4Ref.current.rotation.y += delta * 0.11;
    planet5Ref.current.rotation.y += delta * 0.14;
    planet6Ref.current.rotation.y += delta * 0.1;
    planet7Ref.current.rotation.y += delta * 0.12;
    planet8Ref.current.rotation.y += delta * 0.09;
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
      <mesh
        ref={planet6Ref}
        position={[planet6Position.x, planet6Position.y, planet6Position.z]}
        scale={3.6}
      >
        <sphereGeometry />
        <meshStandardMaterial map={planet6Texture} />
      </mesh>

      <mesh
        ref={planet7Ref}
        position={[planet7Position.x, planet7Position.y, planet7Position.z]}
        scale={1.9}
      >
        <sphereGeometry />
        <meshStandardMaterial map={planet7Texture} />
      </mesh>
      <mesh
        ref={planet8Ref}
        position={[planet8Position.x, planet8Position.y, planet8Position.z]}
        scale={2.3}
      >
        <sphereGeometry />
        <meshStandardMaterial map={planet8Texture} />
      </mesh>
    </>
  );
}
