import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Stars() {
  // Texture
  const starsTexture = useTexture("./textures/particles.png");

  const countStars = 35000;
  const positionsStars = new Float32Array(countStars * 3);
  const colorsStars = new Float32Array(countStars * 3);

  for (let i = 0; i < countStars * 3; i++) {
    positionsStars[i] = (Math.random() - 0.5) * 1000;
    colorsStars[i] = Math.random();
  }

  // Animation
  const starsRef = useRef();
  useFrame((state, delta) => {
    starsRef.current.rotation.y += delta * 0.01;
    starsRef.current.rotation.z += delta * 0.005;
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={countStars}
          itemSize={3}
          array={positionsStars}
        />
        <bufferAttribute
          attach="attributes-color"
          count={countStars}
          itemSize={3}
          array={colorsStars}
        />
      </bufferGeometry>
      <pointsMaterial
        map={starsTexture}
        size={10}
        sizeAttenuation={true}
        transparent={true}
        alphaMap={starsTexture}
        depthWrite={false}
        vertexColors={true}
      />
    </points>
  );
}
