import Flex from "@/components/Layout/Flex";
import UsersListingCard from "../UsersListingCard";

export default function UserList({ listings, starships, userId, userCredits }) {
  function starshipURL(id) {
    return starships.find((starship) => starship._id === id);
  }

  return (
    <Flex
      gap="1.5rem"
      flexWrap="wrap"
      direction="column"
      width="90%"
      alignItems="center"
    >
      {listings.map((listing) => {
        return (
          <UsersListingCard
            {...listing}
            key={listing._id}
            name={starshipURL(listing.starship).name}
            price={listing.price}
            img={starshipURL(listing.starship).img}
            userId={userId}
            starshipId={listing.starship}
            userCredits={userCredits}
            listingId={listing._id}
          />
        );
      })}
    </Flex>
  );
}
