import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import NewOfferForm from "@/components/NewOfferForm";
import StarshipInfo from "@/components/StarshipInfo";
import { updateListing } from "@/lib/api";
import { mutate } from "swr";
import { HiArrowLeft } from "react-icons/hi";
import { StyledPageTitle } from "@/components/Layout/StyledPageTitle";
import { StyledBackLink } from "@/components/Layout/StyledBackLink";

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
  border: 0.5px solid #baf0e0;
  margin-bottom: 0.5rem;
  overflow: hidden;
  position: relative;
`;

export default function EditOffer({ mainUser }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: listing, isLoading } = useSWR(
    id ? `/api/listings/${id}` : null
  );

  async function onSubmit(data) {
    await updateListing({ ...data, id });
    mutate(`/api/listings`);
    mutate(`/api/listings/${id}`);
    router.push("/my-profile/my-selling-list");
  }

  if (!listing || isLoading) {
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
    default_cost_in_credits,
  } = listing.starship;

  return (
    <>
      <StyledBackLink href="/my-profile/my-selling-list">
        <HiArrowLeft />
      </StyledBackLink>
      <Flex direction="column" padding="1.5rem" alignItems="center">
        <StyledPageTitle>Edit offer</StyledPageTitle>
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

        <NewOfferForm
          credit={default_cost_in_credits}
          id={_id}
          onSubmit={onSubmit}
          user={mainUser}
          starship={listing.starship}
        />
      </Flex>
    </>
  );
}
