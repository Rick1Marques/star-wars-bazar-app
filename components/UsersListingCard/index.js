import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";

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

const StyledBuyButton = styled.button`
  background-color: #000000;
  border-radius: 5px;
  border: 0.3px solid var(--secondary-color);
  height: 2rem;
  width: 6.25rem;
  color: var(--secondary-color);
`;

export default function UsersListingCard({ _id, name, img, price }) {
  return (
    <Flex height="150px" width="90%" justifyContent="space-between">
      <StyledImageWrapper>
        <StyledStarshipImage
          src={img}
          alt={name}
          height={0}
          width={0}
          layout="responsive"
        />
      </StyledImageWrapper>
      <Flex width="50%" direction="column" alignItems="center">
        <StyledParagraph>{name}</StyledParagraph>
        <StyledParagraph>Price: {price}</StyledParagraph>
        <StyledBuyButton>Soon...</StyledBuyButton>
      </Flex>
    </Flex>
  );
}
