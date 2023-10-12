import Universe from "@/Utilities";

import { useGLTF } from "@react-three/drei";

export default function DeathStar() {
  const { bigGroupRadius, angle } = Universe();

  const deathStar = useGLTF("./models/death_star_-_star_wars/scene.gltf");
  return (
    <primitive
      object={deathStar.scene}
      scale={0.25}
      position={[
        bigGroupRadius * 1.3 * Math.sin(angle(3)),
        0,
        bigGroupRadius * 1.3 * Math.cos(angle(3)),
      ]}
    />
  );
}
