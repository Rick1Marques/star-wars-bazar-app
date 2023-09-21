import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";

const StyledImage = styled.div`
  border-radius: 11px;
  border: 1px solid var(--secondary-color);
`;

const StyledParagraph = styled.p`
  color: var(--secondary-color);
  display: inline-block;
`;

export default function StarshipCard({ _id, name, img }) {
  return (
    <Flex height="200px" width="160px" direction="column">
      <StyledImage>
        <Image src={img} alt={name} height={160} width={160} />
      </StyledImage>
      <StyledParagraph>{name}</StyledParagraph>
    </Flex>
  );
}
