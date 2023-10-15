import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import Link from "next/link";

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
  border: solid 1px #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  object-position: top;
  object-fit: cover;
`;

const StyledNameFrame = styled.div`
  width: 16.25rem;
  height: 2.5rem;
  padding: 7px;
  border-radius: 6px;
  border: solid 1px #baf0e0;
  text-align: center;
  background: #2c2c2c;
`;

const StyledProfileTitle = styled.h1`
  margin-top: 30px;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledTitleCredit = styled.h2`
  margin-top: 5px;
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
  height: 10px;
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
        <StyledNameFrame>{mainUser.name}</StyledNameFrame>
        <Flex direction="column" alignItems="center">
          <StyledTitleCredit>Total amount of credits:</StyledTitleCredit>
          <StyledCredit>
            {mainUser.credits === null
              ? 0
              : mainUser.credits.toLocaleString("en-US")}
          </StyledCredit>
        </Flex>
        <StyledNameFrame>
          <StyledLink href="/my-profile/my-collection">
            My Collection
          </StyledLink>{" "}
        </StyledNameFrame>
        <StyledNameFrame>
          <StyledLink href="/my-profile/my-selling-list">
            My Selling List
          </StyledLink>
        </StyledNameFrame>
      </Flex>
    </main>
  );
}
