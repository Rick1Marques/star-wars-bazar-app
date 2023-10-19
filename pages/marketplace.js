import StarshipList from "@/components/StarshipList";
import { AppTitle, MarketplaceTitle } from "@/components/Layout/StyledTitles";

export default function Marketplace() {
  return (
    <main>
      <AppTitle />
      <MarketplaceTitle />
      <StarshipList />
    </main>
  );
}
