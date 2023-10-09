import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import useUser from "@/hooks/useUser";
import { mutate } from "swr";
import BuyButton from "../BuyButton";

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

export default function UsersListingCard({
  starshipId,
  userId,
  listingId,
  name,
  img,
  userCredits,
  price,
}) {
  const { mainUser } = useUser();
  if (!mainUser) {
    return "Loading";
  }


export default function UsersListingCard({ _id, name, img, price }) {

  return (
    <Flex height="150px" width="90%" justifyContent="space-between">
      <StyledImageWrapper>
        <StyledStarshipImage
          src={img}
          alt={name}
          height={0}
          width={0}
          layout="responsive"
        />
      </StyledImageWrapper>
      <Flex width="50%" direction="column" alignItems="center">
        <StyledParagraph>{name}</StyledParagraph>


        <StyledParagraph>Price: {price}</StyledParagraph>
        <BuyButton
          buyerId={mainUser._id}
          sellerId={userId}
          starshipId={starshipId}
          listingId={listingId}
          price={price}
          buyerCredit={mainUser.credits}
          sellerCredit={userCredits}
          buyerStarships={mainUser.starships}
        />

      </Flex>
    </Flex>
  );
}
