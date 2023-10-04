import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-title-color);
`;

const StyledImageWrapper = styled.div`
  height: 135px;
  width: 135px;
  border-radius: 11px;
  border: 0.5px solid var(--secondary-color);
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
`;

export default function StarshipCollectionCard({ _id, name, img }) {
  return (
    <Flex height="150px" width="90%">
      <StyledImageWrapper>
        <StyledStarshipImage
          src={img}
          alt={name}
          height={0}
          width={0}
          layout="responsive"
        />
      </StyledImageWrapper>
      <Flex direction="column">
        <StyledParagraph>{name}</StyledParagraph>

        <StyledLink href={`/my-profile/my-collection/new-offer/${_id}`}>
          Sell
        </StyledLink>
      </Flex>
    </Flex>
  );
}
