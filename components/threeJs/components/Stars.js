import { useTexture } from "@react-three/drei";

export default function Stars() {
  // Texture
  const starsTexture = useTexture("./textures/particles.png");

  const countStars = 30000;
  const positionsStars = new Float32Array(countStars * 3);
  const colorsStars = new Float32Array(countStars * 3);

  for (let i = 0; i < countStars * 3; i++) {
    positionsStars[i] = (Math.random() - 0.5) * 800;
    colorsStars[i] = Math.random();
  }

  return (
    <points>
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
        size={Math.random() * 0.6 + 0.2}
        sizeAttenuation={true}
        transparent={true}
        alphaMap={starsTexture}
        depthWrite={false}
        vertexColors={true}
      />
    </points>
  );
}
