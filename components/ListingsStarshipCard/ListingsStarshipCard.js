import useSWR, { mutate } from "swr";
import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import BuyButton from "../BuyButton";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImageWrapper = styled.div`
  height: 84px;
  width: 84px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const StyledCard = styled.div`
  border-radius: 11px;
  border: 0.5px solid var(--secondary-color);
  padding: 1rem;
  background-color: var(--button-color));
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
  text-align: center;
`;
const StyledParagraphprice = styled.p`
  color: var(--secondary-color);
  font-size: 2rem;
`;

export default function ListingsStarshipCard({
  userId,
  name,
  img,
  userCredits,
  price,
  starshipId,
  listingId,
}) {

  const { mainUser } = useUser();
  if (!mainUser) {
    return "Loading";
  }

  if (userId === mainUser._id) {
    return;
  }

  return (
    <StyledCard>
      <Flex justifyContent="space-around">
        <Flex direction="column" alignItems="center" gap=".5px">
          <StyledLink href={`/users/${userId}`} key={userId}>
            <StyledImageWrapper>
              <StyledStarshipImage
                src={img}
                alt={name}
                height={0}
                width={0}
                layout="responsive"
              />
            </StyledImageWrapper>
            <StyledParagraph>{name}</StyledParagraph>
          </StyledLink>
        </Flex>
        <Flex direction="column" alignItems="center" gap="5px">
          <StyledParagraph>Price: </StyledParagraph>
          <StyledParagraphprice>{price}</StyledParagraphprice>
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
    </StyledCard>
  );
}
