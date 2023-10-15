import { mutate } from "swr";
import { buyProtocol, sellProtocol } from "@/lib/api";
import styled from "styled-components";

const StyledBuyButton = styled.button`
  background: linear-gradient(
    90deg,
    #baf0e0 -225%,
    rgba(64, 64, 64, 0) 133.33%
  );
  color: var(--secondary-color);
  border-radius: 5px;
  border-width: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 2rem;
  width: 6.25rem;
  margin-top: 10px;
`;

export default function BuyButton({
  buyerId,
  sellerId,
  starshipId,
  listingId,
  price,
  buyerCredit,
  sellerCredit,
  buyerStarships,
}) {
  async function onBuy() {
    if (buyerCredit < price) {
      return alert("You don't have enough credits to buy this starship.");
    }
    try {
      let data = {
        balance: buyerCredit - price,
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
      balance: sellerCredit + price,
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
