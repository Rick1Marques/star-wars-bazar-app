import Image from "next/image";
import styled from "styled-components";
import Flex from "../Layout/Flex";
import useUser from "@/hooks/useUser";
import BuyButton from "../BuyButton";

const StyledCard = styled.div`
  height: 170px;
  width: 90%;
  border-radius: 20px;
  padding: 1rem;
  background: rgba(242, 242, 242, 0.04);
`;

const StyledImageWrapper = styled.div`
  height: 135px;
  width: 135px;
  border-radius: 11px;
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
  text-align: center;
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
  const { mainUser, mainTheme } = useUser();
  if (!mainUser) {
    return <div>Loading</div>;
  }

  return (
    <StyledCard className={mainTheme}>
      <Flex justifyContent="space-between">
        <StyledImageWrapper>
          <StyledStarshipImage
            src={img}
            alt={name}
            height={0}
            width={0}
            layout="responsive"
          />
        </StyledImageWrapper>
        <Flex
          width="50%"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <StyledParagraph>{name}</StyledParagraph>

          <StyledParagraph>
            Price: {price.toLocaleString("en-US")}
          </StyledParagraph>
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
