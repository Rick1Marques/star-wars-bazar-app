// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// export default function Planets() {
//   const planet1Ref = useRef();
//   const planet2Ref = useRef();
//   const planet3Ref = useRef();
//   const planet4Ref = useRef();
//   const planetGroup = useRef();
//   useFrame((state, delta) => {
//     groupRef.current.rotation.y += delta;
//   });
//   return (
//     <>
//       <group ref={planetGroup}>
//         <mesh
//           ref={planet1Ref}
//           position={[1, 1, 1]}
//           rotation-y={Math.PI * 0.5}
//           scale={1.5}
//         >
//           <boxGeometry />
//           <meshStandardMaterial color="yellow" />
//         </mesh>
//       </group>
//     </>
//   );
// }
