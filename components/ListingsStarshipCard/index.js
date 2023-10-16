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
  border: solid 1px #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const StyledCard = styled.div`
  border-radius: 20px;
  padding: 1rem;
  background: rgba(242, 242, 242, 0.04);
  box-shadow: 0 0 2px 0px #c8c8c8;
`;

const StyledStarshipImage = styled(Image)`
  object-fit: cover;

  object-position: top;
`;

const StyledParagraph = styled.p`
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 0;
`;
const StyledParagraphprice = styled.p`
  color: var(--secondary-color);
  font-size: 1.5rem;
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
  const { mainUser, mainTheme } = useUser();
  if (!mainUser) {
    return <div>Loading...</div>;
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
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="0px"
        >
          <StyledParagraph>Price: </StyledParagraph>
          <StyledParagraphprice>
            {price.toLocaleString("en-US")}
          </StyledParagraphprice>

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
