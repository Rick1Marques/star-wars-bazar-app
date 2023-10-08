import { mutate } from "swr";
import { buyProtocol, sellProtocol } from "@/lib/api";
import styled from "styled-components";

const StyledBuyButton = styled.button`
  background-color: #000000;
  border-radius: 5px;
  border: 0.3px solid var(--secondary-color);
  height: 2rem;
  width: 6.25rem;
  color: var(--secondary-color);
`;

export default function BuyButton({
  buyerId,
  sellerId,
  starshipId,
  listingId,
  preis,
  buyerCredit,
  sellerCredit,
  buyerStarships,
}) {
  async function onBuy() {
    if (buyerCredit < preis) {
      return alert("You don't have enough credits to buy this starship.");
    }
    if (buyerStarships.includes(starshipId)) {
      return alert("You have this starship already.");
    }
    try {
      let data = {
        balance: buyerCredit - preis,
      };
      await buyProtocol({
        user_id: buyerId,
        starship_id: starshipId,
        ...data,
      });
      mutate(`/api/users/${buyerId}`);
      await onSell();
      alert("The transaction was successful!");
    } catch (error) {
      console.log("Starship:onBuy", error);
      alert("Error on the transaction");
    }
  }

  async function onSell() {
    let data = {
      balance: sellerCredit + preis,
    };
    try {
      await sellProtocol(starshipId, sellerId, listingId, { ...data });
      mutate(`/api/users/${sellerId}`);
    } catch (error) {
      console.log("Starship:onSell", error);
      alert("Error on the transaction");
    }
  }
  return <StyledBuyButton onClick={onBuy}>Buy</StyledBuyButton>;
}
