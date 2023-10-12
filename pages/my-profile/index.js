import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import Link from "next/link";
import useUser from "@/hooks/useUser";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledUserImage = styled(Image)`
  border-radius: 50%;
  fill: #303030;
  stroke-width: 1px;
  stroke: #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const StyledNameFrame = styled.div`
  width: 16.25rem;
  height: 2.5rem;
  padding: 7px;
  border-radius: 6px;
  border: 0.5px solid #baf0e0;
  text-align: center;
  background: #2c2c2c;
  // color: var(--primary-title-color);
`;

const StyledProfileTitle = styled.h1`
  margin-top: 75px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledTitleCredit = styled.h2`
  margin-top: 20px;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  console.log(mainUser);

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
        <StyledNameFrame>{mainUser.name}</StyledNameFrame>
        <Flex direction="column" alignItems="center">
          <StyledTitleCredit>Total amount of Credits:</StyledTitleCredit>
          <StyledCredit>{mainUser.credits}</StyledCredit>
        </Flex>
        <StyledNameFrame>
          <StyledLink href="/my-profile/my-collection">
            My Collection
          </StyledLink>{" "}
        </StyledNameFrame>
        <StyledNameFrame>
          <StyledLink href="/my-profile/my-selling-list">
            My selling list
          </StyledLink>
        </StyledNameFrame>
      </Flex>
    </main>
  );
}
