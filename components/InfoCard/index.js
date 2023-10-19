import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import StarshipInfo from "@/components/StarshipInfo";
import useUser from "@/hooks/useUser";

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
  margin-bottom: 0.5rem;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export default function InfoCard({
  img,
  name,
  model,
  manufacturer,
  max_atmosphering_speed,
  passengers,
  cargo_capacity,
  starship_class,
}) {
  const { mainTheme } = useUser();
  return (
    <Flex direction="column">
      <StyledImageWrapper className={mainTheme}>
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
      <StarshipInfo
        label="Max. speed:"
        value={
          isNaN(max_atmosphering_speed) === true
            ? max_atmosphering_speed
            : Number(max_atmosphering_speed).toLocaleString("en-US")
        }
      />
      <StarshipInfo
        label="Passengers:"
        value={
          isNaN(passengers) === true
            ? passengers
            : Number(passengers).toLocaleString("en-US")
        }
      />
      <StarshipInfo
        label="Cargo capacity:"
        value={
          isNaN(cargo_capacity) === true
            ? cargo_capacity
            : Number(cargo_capacity).toLocaleString("en-US")
        }
      />
      <StarshipInfo label="Starship class:" value={starship_class} />
    </Flex>
  );
}
