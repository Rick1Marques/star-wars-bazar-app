import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import Link from "next/link";
import useUser from "@/hooks/useUser";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-title-color);
`;

const StyledUserImage = styled(Image)`
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

const StyledProfileTitle = styled.h1`
  color: var(--primary-title-color);
  margin-top: 75px;
`;

const StyledTitleCredit = styled.h2`
  color: var(--primary-title-color);
  margin-top: 20px;
`;

const StyledCredit = styled.p`
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 50px;
`;

export default function MyProfile({ mainUser }) {
  if (!mainUser) {
    return "Loading";
  }
  return (
    <main>
      <Flex direction="column" alignItems="center" gap="30px">
        <StyledProfileTitle>My Profile</StyledProfileTitle>
        <StyledUserImage
          alt={mainUser.name}
          src={mainUser.avatar}
          width={140}
          height={140}
        />
        <StyledUserName>{mainUser.name}</StyledUserName>
        <Flex direction="column" alignItems="center">
          <StyledTitleCredit>Total amount of Credits:</StyledTitleCredit>
          <StyledCredit>
            {mainUser.credits.toLocaleString("en-US")}
          </StyledCredit>
        </Flex>
        <StyledLink href="/my-profile/my-collection">My Collection</StyledLink>
        <StyledLink href="/my-profile/my-selling-list">
          My selling list
        </StyledLink>
      </Flex>
    </main>
  );
}
