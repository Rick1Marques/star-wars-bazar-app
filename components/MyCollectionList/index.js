import Flex from "@/components/Layout/Flex";
import StarshipCollectionCard from "../StarshipCollectionCard";
import useUser from "@/hooks/useUser";

export default function MyCollectionList() {
  const { mainUser } = useUser();
  if (!mainUser) {
    return <div>Loading...</div>;
  }

  const starshipsForSale = mainUser.listings.map((listing) => listing.starship);

  const starshipsNotForSale = mainUser.starships.filter((starship) => {
    if (!starshipsForSale.includes(starship._id)) {
      return starship;
    }
    return;
  });

  return (
    <Flex gap="1.5rem" flexWrap="wrap" alignItems="center" direction="column">
      {starshipsNotForSale.map((starship) => (
        <StarshipCollectionCard {...starship} key={starship._id} />
      ))}
    </Flex>
  );
}
