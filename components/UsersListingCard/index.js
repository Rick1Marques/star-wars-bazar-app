import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import useUser from "@/hooks/useUser";
import { mutate } from "swr";
import { buyProtocol, sellProtocol } from "@/lib/api";

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

const StyledBuyButton = styled.button`
  background-color: #000000;
  border-radius: 5px;
  border: 0.3px solid var(--secondary-color);
  height: 2rem;
  width: 6.25rem;
  color: var(--secondary-color);
`;

export default function UsersListingCard({
  starshipId,
  userId,
  listingId,
  name,
  img,
  userCredits,
  preis,
}) {
  const { mainUser } = useUser();
  if (!mainUser) {
    return "Loading";
  }

  async function onBuy() {
    if (mainUser.credits < preis) {
      return alert("You don't have enough credits to buy this starship.");
    }
    if (mainUser.starships.includes(starshipId)) {
      return alert("You have this starship already.");
    }
    try {
      let data = {
        balance: mainUser.credits - preis,
      };
      await buyProtocol({
        user_id: mainUser._id,
        starship_id: starshipId,
        ...data,
      });
      mutate(`/api/users/${mainUser._id}`);
      await onSell();
      alert("The transaction was successful!");
    } catch (error) {
      console.log("Starship:onBuy", error);
      alert("Error on the transaction");
    }
  }

  async function onSell() {
    let data = {
      balance: userCredits + preis,
    };
    try {
      await sellProtocol(starshipId, userId, listingId, { ...data });
      mutate(`/api/users/${userId}`);
    } catch (error) {
      console.log("Starship:onSell", error);
      alert("Error on the transaction");
    }
  }

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
        <StyledParagraph>Price: {preis}</StyledParagraph>
        <StyledBuyButton onClick={onBuy}>Buy</StyledBuyButton>
      </Flex>
    </Flex>
  );
}
