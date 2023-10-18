import useSWR from "swr";
import LoginList from "@/components/LoginList";
import Flex from "@/components/Layout/Flex";
import { Canvas } from "@react-three/fiber";
import Universe from "@/Utilities";
import Stars from "@/components/threeJs/components/Stars";
import { StyledPageTitle } from "@/components/Layout/StyledTitles";

export default function SelectCharacterPage() {
  const { bigGroupRadius } = Universe();
  const { data: users, isLoading } = useSWR(`/api/users`);
  if (!users || isLoading) {
    return <div>Loading...</div>;
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
        <StyledPageTitle>Choose your Character</StyledPageTitle>
        <LoginList users={users} />
      </Flex>
    </>
  );
}
