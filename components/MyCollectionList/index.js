import useSWR from "swr";
import Flex from "@/components/Layout/Flex";
import StarshipCollectionCard from "../StarshipCollectionCard";

export default function MyCollectionList() {
  const { data: users, isLoading } = useSWR("/api/users");
  if (!users || isLoading) {
    return <h1>Loading...</h1>;
  }

  const mainUser = users[0];

  const starshipsForSale = mainUser.listings.map((listing) => listing.starship);

  const starshipsNotForSale = mainUser.starships.filter((starship) => {
    if (!starshipsForSale.includes(starship._id)) {
      return starship;
    }
    return;
  });

  return (
    <>
      <Flex gap="1.5rem" flexWrap="wrap" alignItems="center" direction="column">
        {starshipsNotForSale.map((starship) => {
          return (
            <StarshipCollectionCard
              {...starship}
              key={starship._id}
              name={starship.name}
              img={starship.img}
            />
          );
        })}
      </Flex>
    </>
  );
}
