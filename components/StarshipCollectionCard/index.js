import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import { StyledLink } from "../Layout/StyledLink";
import useUser from "@/hooks/useUser";

const StyledImageWrapper = styled.div`
  height: 135px;
  width: 135px;
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
text-align: center;
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: normal;
  color: var(--secondary-color);
  background: linear-gradient(90deg, #CDFFBB 50%, rgba(143, 238, 204, 0.00) 221.43%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent:
`;

export default function StarshipCollectionCard({ _id, name, img }) {
  const { mainTheme } = useUser();
  return (
    <Flex height="150px" width="90%">
      <StyledImageWrapper className={mainTheme}>
        <StyledStarshipImage
          src={img}
          alt={name}
          height={0}
          width={0}
          layout="responsive"
        />
      </StyledImageWrapper>
      <Flex direction="column" justifyContent="flex-start">
        <StyledParagraph>{name}</StyledParagraph>
        <StyledLink
          className={mainTheme}
          href={`/my-profile/my-collection/new-offer/${_id}`}
        >
          Sell
        </StyledLink>
      </Flex>
    </Flex>
  );
}
