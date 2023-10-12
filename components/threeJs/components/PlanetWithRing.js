import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import Universe from "@/Utilities";
import { AdditiveBlending } from "three";

export default function PlanetWithRing() {
  const { bigGroupRadius, angle } = Universe();

  /**
   * Texture
   */

  //ring

  const ringTexture = useTexture("./textures/particles.png");

  //planet

  const planet6Texture = useTexture("./textures/2k_mars.jpg");

  /**
   * Position
   */

  const countRing = 1000000;
  const radiusRing = 18;

  const positionsRing = new Float32Array(countRing * 3);

  for (let i = 0; i < countRing; i++) {
    const i3 = i * 3;

    // Position
    const angleRing = Math.random() * Math.PI * 2;

    const randomness = 2;
    const randomXZ = (Math.random() - 0.5) * randomness;
    const randomY = (Math.random() - 0.5) * randomness * 0.4;

    const radius =
      Math.random() * (radiusRing - radiusRing * 0.3) + radiusRing * 0.3;

    positionsRing[i3 + 0] = Math.sin(angleRing) * radius + randomXZ;
    positionsRing[i3 + 1] = randomY;
    positionsRing[i3 + 2] = Math.cos(angleRing) * radius + randomXZ;
  }

  // Group
  const planetWithRing = {
    x: 0,
    y: bigGroupRadius,
    z: bigGroupRadius * 0.3,
  };

  /**
   * Animation
   */

  const planetWithRingRef = useRef();

  useFrame((state, delta) => {
    planetWithRingRef.current.rotation.y += delta * 0.1;
  });
  return (
    <group
      ref={planetWithRingRef}
      position={[planetWithRing.x, planetWithRing.y, planetWithRing.z]}
      rotation-x={(45 * Math.PI) / 180}
    >
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={countRing}
            itemSize={3}
            array={positionsRing}
          />
        </bufferGeometry>
        <pointsMaterial
          map={ringTexture}
          size={0.055}
          sizeAttenuation={true}
          transparent={true}
          alphaMap={ringTexture}
          depthWrite={false}
          color={"#ff6030"}
          blending={AdditiveBlending}
        />
      </points>

      <mesh position={[0, 0, 0]} scale={4}>
        <sphereGeometry />
        <meshStandardMaterial map={planet6Texture} color={"#ff4030"} />
      </mesh>
    </group>
  );
}
