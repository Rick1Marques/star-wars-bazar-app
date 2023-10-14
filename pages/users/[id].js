import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import UserList from "@/components/UserListings";
import useUser from "@/hooks/useUser";

const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: white;
  align-self: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImageWrapper = styled.div`
  margin-top: 3rem;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const StyledUserImage = styled(Image)`
  fill: #303030;
  stroke-width: 1px;
  stroke: #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const StyledUserName = styled.div`
  width: 16.25rem;
  height: 2.5rem;
  padding: 7px;
  border-radius: 6px;
  text-align: center;
  color: var(--primary-title-color);
`;

export default function User() {
  const { mainTheme } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const { data: user, isLoading } = useSWR(id ? `/api/users/${id}` : null);
  if (!user || isLoading) {
    return <h1>Loading...</h1>;
  }

  const { name, avatar, starships, listings, _id, credits } = user;

  return (
    <Flex direction="column" alignItems="center" gap="30px">
      <StyledImageWrapper className={mainTheme}>
        <StyledUserImage alt={name} src={avatar} width={140} height={140} />
      </StyledImageWrapper>

      <StyledUserName className={mainTheme}>{name}</StyledUserName>
      <p>This user is selling:</p>
      <UserList
        listings={listings}
        starships={starships}
        userId={_id}
        userCredits={credits}
      />
    </Flex>
  );
}
