import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import UserList from "@/components/UserListings";

const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: white;
  align-self: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledUserImage = styled(Image)`
  margin-top: 3rem;
  border-radius: 50%;
`;

const StyledUserName = styled.div`
  width: 16.25rem;
  height: 2.5rem;
  padding: 7px;
  border-radius: 6px;
  border: 0.5px solid #baf0e0;
  text-align: center;
  color: var(--primary-title-color);
`;

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, isLoading } = useSWR(id ? `/api/users/${id}` : null);
  if (!user || isLoading) {
    return <h1>Loading...</h1>;
  }

  const { name, avatar, starships, listings } = user;

  return (
    <Flex direction="column" alignItems="center" gap="30px">
      <StyledUserImage alt={name} src={avatar} width={140} height={140} />
      <StyledUserName>{name}</StyledUserName>
      <p>This user is selling:</p>
      <UserList listings={listings} starships={starships} />
    </Flex>
  );
}
