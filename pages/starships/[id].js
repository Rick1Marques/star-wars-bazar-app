import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import StarshipInfo from "@/components/StarshipInfo";

const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: white;
  align-self: flex-start;
`;
const StyledDetailPageTitle = styled.h1`
  color: var(--primary-title-color);
  font-size: 1.5rem;
  text-align: center;
`;

const StyledStarshipImage = styled(Image)`
  border-radius: 11px;
  border: 0.5px solid var(--secondary-color);
  margin-bottom: 2rem;
`;

export default function Starship() {
  const router = useRouter();
  const { id } = router.query;
  const { data: starship, isLoading } = useSWR(
    id ? `/api/starships/${id}` : null
  );
  if (!starship || isLoading) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    model,
    manufacturer,
    max_atmosphering_speed,
    passengers,
    cargo_capacity,
    starship_class,
    img,
  } = starship;

  return (
    <>
      <StyledBackLink href={"/marketplace"}>Back</StyledBackLink>
      <StyledDetailPageTitle>{name}</StyledDetailPageTitle>

      <Flex direction="column" padding="1.5rem" alignItems="center">
        <Flex direction="column">
          <StyledStarshipImage src={img} alt={name} height={285} width={330} />

          <StarshipInfo label="Model:" value={model}></StarshipInfo>
          <StarshipInfo
            label="Manufacturer:"
            value={manufacturer}
          ></StarshipInfo>
          <StarshipInfo
            label="Max. atmosphering speed:"
            value={max_atmosphering_speed}
          ></StarshipInfo>
          <StarshipInfo label="Passengers:" value={passengers}></StarshipInfo>
          <StarshipInfo
            label="Cargo capacity:"
            value={cargo_capacity}
          ></StarshipInfo>
          <StarshipInfo
            label="Starship class:"
            value={starship_class}
          ></StarshipInfo>
        </Flex>
      </Flex>
    </>
  );
}
