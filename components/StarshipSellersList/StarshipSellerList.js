import useSWR from "swr";
import Flex from "@/components/Layout/Flex";
import ListingsStarshipCard from "../ListingsStarshipCard/ListingsStarshipCard";

export default function StarshipSellerList({ id }) {
  const { data: listings, isLoading } = useSWR("/api/listings");
  if (!listings || isLoading) {
    return <h1>Loading...</h1>;
  }

  const spaceshipListings = listings.filter((listing) => {
    if (listing.starship._id === id) {
      return listing;
    }
  });

  if (spaceshipListings.length === 0) {
    return <p>No current offers</p>;
  }
  return (
    <>
      <Flex gap="1.5rem" flexWrap="wrap" direction="column" width="90%">
        {spaceshipListings.map((listing) => {
          return (
            <ListingsStarshipCard
              {...listing}
              key={listing._id}
              name={listing.user.name}
              preis={listing.preis}
              img={listing.user.avatar}
              userId={listing.user._id}
            />
          );
        })}
      </Flex>
    </>
  );
}
