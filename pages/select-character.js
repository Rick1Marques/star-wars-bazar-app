import useSWR from "swr";
import LoginList from "@/components/LoginList";
import Flex from "@/components/Layout/Flex";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
`;

export default function SelectCharacterPage() {
  const { data: users, isLoading } = useSWR(`/api/users`);
  if (!users || isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Flex direction="column" alignItems="center" gap="3rem">
      <StyledTitle>Choose Your Character</StyledTitle>
      <LoginList users={users} />
    </Flex>
  );
}
