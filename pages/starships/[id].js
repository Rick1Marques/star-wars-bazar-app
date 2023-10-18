import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import StarshipSellersList from "@/components/StarshipSellersList";
import { StyledPageTitle } from "@/components/Layout/StyledTitles";
import { StyledBackLink } from "@/components/Layout/StyledLinkAndButton";
import { HiArrowLeft } from "react-icons/hi";
import Offercard from "@/components/InfoCard";

const StyledTitleCredit = styled.h2`
  margin-top: 10px;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Starship() {
  const router = useRouter();
  const { id } = router.query;
  const { data: starship, isLoading } = useSWR(
    id ? `/api/starships/${id}` : null
  );
  if (!starship || isLoading) {
    return <div>Loading...</div>;
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
    <>
      <StyledBackLink href={"/marketplace"}>
        <HiArrowLeft />
      </StyledBackLink>
      <Flex direction="column" alignItems="center">
        <StyledPageTitle>{name}</StyledPageTitle>
        <Flex direction="column" padding="1.5rem" alignItems="center">
          <Offercard
            img={img}
            name={name}
            model={model}
            manufacturer={manufacturer}
            max_atmosphering_speed={max_atmosphering_speed}
            passengers={passengers}
            cargo_capacity={cargo_capacity}
            starship_class={starship_class}
          />
          <StyledTitleCredit>Sellers:</StyledTitleCredit>
        </Flex>
        <StarshipSellersList img={img} name={name} starshipId={_id} />
      </Flex>
    </>
  );
}
