import styled from "styled-components";

const StyledAppTitle = styled.h1`
  color: var(--secondary-color);
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
`;

export function AppTitle() {
  return <StyledAppTitle>Star Wars Bazaar</StyledAppTitle>;
}
const StyledMarketplaceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export function MarketplaceTitle() {
  return <StyledMarketplaceTitle>Marketplace</StyledMarketplaceTitle>;
}

export const StyledPageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 30px;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledTitleCredit = styled.h2`
  margin-top: 8px;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
