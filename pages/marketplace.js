import StarshipList from "@/components/StarshipList";
import AppTitle from "@/components/AppTitle";
import MarketplaceTitle from "@/components/MarketplaceTitle";
import Flex from "@/components/Layout/Flex";

export default function Marketplace() {
  return (
    <>
      <AppTitle />
      <MarketplaceTitle />
      <StarshipList />
    </>
  );
}
