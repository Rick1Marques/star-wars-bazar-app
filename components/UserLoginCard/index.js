import Flex from "../Layout/Flex";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImageWrapper = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const StyledStarshipImage = styled(Image)`
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const StyledParagraph = styled.p`
  color: var(--secondary-color);
  text-align: center;
  font-size: 2rem;
`;

export default function UserLoginCard({ name, avatar, userId }) {
  return (
    <StyledLink href={`/my-profile`} key={userId}>
      <Flex direction="column" alignItems="center" gap="1rem">
        <StyledImageWrapper>
          <StyledStarshipImage
            src={avatar}
            alt={name}
            height={0}
            width={0}
            layout="responsive"
          />
        </StyledImageWrapper>
        <StyledParagraph>{name}</StyledParagraph>
      </Flex>
    </StyledLink>
  );
}
