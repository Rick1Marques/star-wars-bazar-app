import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import NewOfferForm from "@/components/NewOfferForm";
import Link from "next/link";
import { createListing } from "@/lib/api";
import { mutate } from "swr";
import { StyledPageTitle } from "@/components/Layout/StyledPageTitle";
import Offercard from "@/components/OfferCard";

const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: white;
  align-self: flex-start;
`;

export default function NewOffer({ mainUser }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: starship, isLoading } = useSWR(
    id ? `/api/starships/${id}` : null
  );
  if (!starship || isLoading) {
    return <div>Loading...</div>;
  }
  async function onSubmit(data) {
    await createListing({
      ...data,
    });
    mutate(`/api/listings`);
    router.push("/my-profile/my-selling-list");
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
  } = starship;

  return (
    <Flex direction="column" padding="1.5rem" alignItems="center">
      <StyledBackLink href="/my-profile/my-collection">Back</StyledBackLink>
      <StyledPageTitle>New offer</StyledPageTitle>
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
        credit={default_cost_in_credits.toLocaleString("en-US")}
        id={_id}
        onSubmit={onSubmit}
        user={mainUser}
        starship={starship}
      />
    </Flex>
  );
}
