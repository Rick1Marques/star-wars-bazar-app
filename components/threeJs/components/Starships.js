import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Universe from "@/Utilities";
import { useGLTF } from "@react-three/drei";

export default function Starships() {
  const { bigGroupRadius, angle } = Universe();

  const tieFighter = useGLTF("./models/tie_fighter/scene.gltf", "/draco-gltf");
  const xWing = useGLTF("./models/x-_wing/scene.gltf", "/draco-gltf");
  const milleniumFalcon = useGLTF(
    "./models/millenium_falcon/scene.gltf",
    "/draco-gltf"
  );

  //Animation
  const tieFighterRef = useRef();
  const xWingRef = useRef();
  const milleniumFalconRef = useRef();
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const starshipsAngle1 = elapsedTime * 1.9;
    const starshipsAngle2 = elapsedTime * 1.8;
    const starshipsAngle3 = elapsedTime * 1.5;
    tieFighterRef.current.position.x =
      Math.cos(starshipsAngle1) * bigGroupRadius * 0.2;
    tieFighterRef.current.position.y =
      Math.sin(starshipsAngle1) * bigGroupRadius * 0.25;
    tieFighterRef.current.position.z =
      Math.sin(starshipsAngle1) * bigGroupRadius * 0.2;
    xWingRef.current.position.x =
      Math.cos(starshipsAngle2) * bigGroupRadius * 0.2;
    xWingRef.current.position.y =
      Math.sin(starshipsAngle2) * bigGroupRadius * 0.25;
    xWingRef.current.position.z =
      Math.sin(starshipsAngle2) * bigGroupRadius * 0.2;
    milleniumFalconRef.current.position.x =
      Math.cos(starshipsAngle3 * 1.5) * bigGroupRadius * 0.2;
    milleniumFalconRef.current.position.y =
      Math.sin(starshipsAngle3 * 1.5) * bigGroupRadius * 0.25;
    milleniumFalconRef.current.position.z =
      Math.sin(starshipsAngle3 * 1.5) * bigGroupRadius * 0.2;
  });
  return (
    <>
      <group
        ref={groupRef}
        position={[
          bigGroupRadius * Math.sin(angle(3)),
          0,
          bigGroupRadius * Math.cos(angle(3)),
        ]}
      >
        <primitive
          ref={tieFighterRef}
          object={tieFighter.scene}
          scale={0.35}
          position={[
            bigGroupRadius * Math.sin(angle(2.8)),
            0,
            bigGroupRadius * Math.cos(angle(2.8)),
          ]}
          rotation-y={(200 * Math.PI) / 180}
        />
        <primitive
          ref={xWingRef}
          object={xWing.scene}
          scale={0.35}
          position={[
            bigGroupRadius * Math.sin(angle(2.75)),
            0,
            bigGroupRadius * Math.cos(angle(2.75)),
          ]}
          rotation-y={(130 * Math.PI) / 180}
        />
        <primitive
          ref={milleniumFalconRef}
          object={milleniumFalcon.scene}
          scale={0.35}
          position={[
            bigGroupRadius * Math.sin(angle(3)),
            0,
            bigGroupRadius * Math.cos(angle(3)),
          ]}
          rotation-y={(-30 * Math.PI) / 180}
        />
      </group>
    </>
  );
}
