import StarshipList from "@/components/StarshipList";
import AppTitle from "@/components/Layout/AppTitle";
import MarketplaceTitle from "@/components/Layout/MarketplaceTitle";
import Flex from "@/components/Layout/Flex";

export default function Marketplace() {
  return (
    <main>
      <AppTitle />
      <MarketplaceTitle />
      <StarshipList />
    </main>
  );
}
