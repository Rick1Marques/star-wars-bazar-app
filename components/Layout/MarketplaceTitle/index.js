import styled from "styled-components";

const StyledMarketplaceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export default function MarketplaceTitle() {
  return <StyledMarketplaceTitle>Marketplace</StyledMarketplaceTitle>;
}
