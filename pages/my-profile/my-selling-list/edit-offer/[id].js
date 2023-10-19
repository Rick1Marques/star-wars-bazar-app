import useSWR from "swr";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import NewOfferForm from "@/components/NewOfferForm";
import { updateListing } from "@/lib/api";
import { mutate } from "swr";
import { HiArrowLeft } from "react-icons/hi";
import { StyledPageTitle } from "@/components/Layout/StyledTitles";
import { StyledBackLink } from "@/components/Layout/StyledLinkAndButton";
import Offercard from "@/components/InfoCard";

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
