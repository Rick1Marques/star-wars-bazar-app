import useSWR from "swr";
import LoginList from "@/components/LoginList";
import Flex from "@/components/Layout/Flex";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: 2rem;
`;

export default function SelectCharacterPage() {
  const { data: users, isLoading } = useSWR(`/api/users`);
  if (!users || isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Flex direction="column" alignItems="center" gap="3rem">
      <StyledTitle>Choose your Character</StyledTitle>
      <LoginList users={users} />
    </Flex>
  );
}
