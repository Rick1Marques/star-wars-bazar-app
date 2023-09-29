import useSWR from "swr";
import Flex from "@/components/Layout/Flex";
import ListingCard from "@/components/ListingCard";

export default function MyListings() {
  const { data: users, isLoading } = useSWR("/api/users");
  if (!users || isLoading) {
    return <h1>Loading...</h1>;
  }

  const mainUser = users[0];
  function starshipURL(id) {
    return mainUser.starships.find((starship) => starship._id === id);
  }

  return (
    <>
      <Flex gap="1.5rem" flexWrap="wrap" alignItems="center" direction="column">
        {mainUser.listings.map((listing) => {
          return (
            <ListingCard
              {...listing}
              key={listing._id}
              name={starshipURL(listing.starship).name}
              preis={listing.preis}
              img={starshipURL(listing.starship).img}
            />
          );
        })}
      </Flex>
    </>
  );
}
