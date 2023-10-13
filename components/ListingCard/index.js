import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";

import Link from "next/link";
import Listing from "@/db/models/Listing";

import { deleteListing } from "@/lib/api";
import useSWR from "swr";


const StyledImageWrapper = styled.div`
  height: 135px;
  width: 135px;
  border-radius: 11px;
  border: 0.5px solid var(--secondary-color);
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



export default function ListingCard({ _id, name, img, price }) {
  const { data: listings, isLoading, mutate } = useSWR("/api/listings");
  if (!listings || isLoading) {
    return "Loading...";
  }

  async function onDelete(id) {
    if (!confirm("Are you sure you want to delete this starship?")) {
      return;
    }
    await deleteListing(id);
    mutate();
  }


  return (
    <Flex height="150px" width="90%">
      <StyledImageWrapper>
        <StyledStarshipImage
          src={img}
          alt={name}
          height={0}
          width={0}
          layout="responsive"
        />
      </StyledImageWrapper>
      <Flex direction="column">
        <StyledParagraph>{name}</StyledParagraph>
        <StyledParagraph>Price: {price}</StyledParagraph>

        <Link href={`/my-profile/my-selling-list/edit-offer/${_id}`}>edit</Link>

        <button type="button" onClick={() => onDelete(_id)}>
          Delete
        </button>

      </Flex>
    </Flex>
  );
}
