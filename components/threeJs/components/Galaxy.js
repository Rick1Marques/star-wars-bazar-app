import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import Universe from "@/Utilities";
import { AdditiveBlending } from "three";

export default function Galaxy() {
  const { bigGroupRadius, angle } = Universe();

  /**
   * Texture
   */

  //particles

  const particlesTexture = useTexture("./textures/particles.png");
  /**
   * Position
   */
  const galaxyParameters = {
    count: 570000,
    radius: 14,
    spin: 0.3,
    size: 0.08,
    randomnessPower: 3,
    branches: 12,
    outsideColor: "#1b3984",
    randomness: 1,
    insideColor: "#ff6030",
  };

  const positions = new Float32Array(galaxyParameters.count * 3);

  for (let i = 0; i < galaxyParameters.count; i++) {
    const i3 = i * 3;

    // Position
    const radius = Math.random() * galaxyParameters.radius;
    const spinAngle = radius * galaxyParameters.spin;
    const branchesAngle =
      ((i % galaxyParameters.branches) / galaxyParameters.branches) *
      Math.PI *
      2;

    const randomX =
      Math.pow(Math.random(), galaxyParameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1);
    const randomY =
      Math.pow(Math.random() * 1.8, galaxyParameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1);
    const randomZ =
      Math.pow(Math.random(), galaxyParameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1);

    positions[i3 + 0] = Math.cos(branchesAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchesAngle + spinAngle) * radius + randomZ;
  }

  /**
   * Animation
   */

  const galaxyRef = useRef();

  useFrame((state, delta) => {
    galaxyRef.current.rotation.y += delta * 0.1;
    galaxyRef.current.rotation.z += delta * 0.005;
  });

  return (
    <points
      ref={galaxyRef}
      position={[0, -bigGroupRadius, -bigGroupRadius * 0.2]}
      rotation-x={(45 * Math.PI) / 180}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={galaxyParameters.count}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial
        map={particlesTexture}
        size={galaxyParameters.size}
        sizeAttenuation={true}
        transparent={true}
        alphaMap={particlesTexture}
        depthWrite={false}
        color={"#1b3984"}
        blending={AdditiveBlending}
      />
    </points>
  );
}
