import styled from "styled-components";

const StyledMarketplaceTitle = styled.h2`
  color: var(--secondary-title-color);
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;
export default function MarketplaceTitle() {
  return <StyledMarketplaceTitle>Marketplace</StyledMarketplaceTitle>;
}
