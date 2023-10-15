import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import useUser from "@/hooks/useUser";

const StyledImageWrapper = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 11px;

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

export default function StarshipCard({ _id, name, img }) {
  const { mainTheme } = useUser();
  return (
    <section>
      <Flex height="200px" width="160px" direction="column">
        <StyledImageWrapper className={mainTheme}>
          <StyledStarshipImage
            src={img}
            alt={name}
            height={0}
            width={0}
            layout="responsive"
          />
        </StyledImageWrapper>
        <StyledParagraph>{name}</StyledParagraph>
      </Flex>
    </section>
  );
}
