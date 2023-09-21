import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";

const StyledImage = styled(Image)`
  border-radius: 11px;
  border: 1px solid var(--secondary-color);
`;

const StyledParagraph = styled.p`
  color: var(--secondary-color);
`;

export default function StarshipCard({ _id, name, img }) {
  return (
    <Flex height="200px" width="160px" direction="column">
      <StyledImage src={img} alt={name} height={160} width={160} />
      <StyledParagraph>{name}</StyledParagraph>
    </Flex>
  );
}
