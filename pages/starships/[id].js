import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import StarshipInfo from "@/components/StarshipInfo";
import StarshipSellerList from "@/components/StarshipSellersList/StarshipSellerList";

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

const StyledImageWrapper = styled.div`
  height: 285px;
  width: 330px;
  border-radius: 11px;
  border: 0.5px solid var(--secondary-color);
  margin-bottom: 2rem;
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
    _id,
  } = starship;

  return (
    <Flex direction="column" alignItems="center">
      <StyledBackLink href={"/marketplace"}>Back</StyledBackLink>
      <StyledDetailPageTitle>{name}</StyledDetailPageTitle>

      <Flex direction="column" padding="1.5rem" alignItems="center">
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
      </Flex>
      <StarshipSellerList img={img} name={name} id={_id} />
    </Flex>
  );
}
