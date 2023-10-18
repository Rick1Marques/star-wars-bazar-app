import Flex from "@/components/Layout/Flex";
import ListingCard from "@/components/ListingCard";
import useUser from "@/hooks/useUser";

export default function MyListings() {
  const { mainUser, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
              _id={listing._id}
              name={starshipURL(listing.starship).name}
              price={listing.price.toLocaleString("en-US")}
              img={starshipURL(listing.starship).img}
            />
          );
        })}
      </Flex>
    </>
  );
}
