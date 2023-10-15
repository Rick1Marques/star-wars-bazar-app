import useSWR from "swr";
import LoginList from "@/components/LoginList";
import Flex from "@/components/Layout/Flex";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Universe from "@/Utilities";
import Stars from "@/components/threeJs/components/Stars";

const StyledTitle = styled.h1`
  margin-top: 2rem;
`;

export default function SelectCharacterPage() {
  const { bigGroupRadius } = Universe();
  const { data: users, isLoading } = useSWR(`/api/users`);
  if (!users || isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="space-background">
        <Canvas
          camera={{
            fov: 45,
            position: [0, 0, 5 * bigGroupRadius],
          }}
        >
          <Stars />
        </Canvas>
      </div>
      <Flex direction="column" alignItems="center" gap="3rem">
        <StyledTitle>Choose your Character</StyledTitle>
        <LoginList users={users} />
      </Flex>
    </>
  );
}
