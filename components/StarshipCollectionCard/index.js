import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import { StyledLink } from "../Layout/StyledLink";

const StyledImageWrapper = styled.div`
  height: 135px;
  width: 135px;
  border-radius: 11px;
  border: 0.5px solid #baf0e0;
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
  font-size: 1rem;
  font-weight: 300;
  line-height: normal;
  color: var(--secondary-color);
`;

export default function StarshipCollectionCard({ _id, name, img }) {
  return (
    <Flex justifyContent="center" height="150px" width="90%" padding=".5rem">
      <StyledImageWrapper>
        <StyledStarshipImage
          src={img}
          alt={name}
          height={0}
          width={0}
          layout="responsive"
        />
      </StyledImageWrapper>
      <Flex
        direction="column"
        width="50%"
        alignItems="center"
        justifyContent="center"
        gap="0rem"
        padding="0 0 2rem 0"
      >
        <StyledParagraph>{name}</StyledParagraph>
        <StyledLink href={`/my-profile/my-collection/new-offer/${_id}`}>
          Sell
        </StyledLink>
      </Flex>
    </Flex>
  );
}
