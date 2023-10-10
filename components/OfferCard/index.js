import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import StarshipInfo from "@/components/StarshipInfo";

const StyledStarshipImage = styled(Image)`
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const StyledImageWrapper = styled.div`
  height: 285px;
  width: 330px;
  border-radius: 11px;
  border: 0.5px solid var(--secondary-color);
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
`;

export default function Offercard({
  img,
  name,
  model,
  manufacturer,
  max_atmosphering_speed,
  passengers,
  cargo_capacity,
  starship_class,
}) {
  return (
    <Flex direction="column">
      <StyledImageWrapper>
        <StyledStarshipImage
          src={img}
          alt={name}
          height={0}
          width={0}
          layout="responsive"
        />
      </StyledImageWrapper>

      <StarshipInfo label="Model:" value={model} />
      <StarshipInfo label="Manufacturer:" value={manufacturer} />
      <StarshipInfo label="Max. speed:" value={max_atmosphering_speed} />
      <StarshipInfo label="Passengers:" value={passengers} />
      <StarshipInfo label="Cargo capacity:" value={cargo_capacity} />
      <StarshipInfo label="Starship class:" value={starship_class} />
    </Flex>
  );
}
