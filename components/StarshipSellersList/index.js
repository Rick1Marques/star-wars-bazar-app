import useSWR from "swr";
import Flex from "@/components/Layout/Flex";
import ListingsStarshipCard from "../ListingsStarshipCard";

export default function StarshipSellersList({ starshipId }) {
  const { data: listings, isLoading } = useSWR("/api/listings");
  if (!listings || isLoading) {
    return <h1>Loading...</h1>;
  }

  const spaceshipListings = listings.filter((listing) => {
    if (listing.starship._id === starshipId) {
      return listing;
    }
  });

  if (spaceshipListings.length === 0) {
    return <p>No current offers</p>;
  }
  return (
    <>
      <Flex gap="1.5rem" direction="column" width="90%">
        {spaceshipListings.map((listing) => {
          return (
            <ListingsStarshipCard
              key={listing._id}
              name={listing.user.name}
              price={listing.price}
              img={listing.user.avatar}
              userId={listing.user._id}
              starshipId={listing.starship._id}
              listingId={listing._id}
              userCredits={listing.user.credits}
            />
          );
        })}
      </Flex>
    </>
  );
}
