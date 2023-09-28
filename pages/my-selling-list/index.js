import useSWR from "swr";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import StarshipCard from "@/components/StarshipCard";
import MyListings from "@/components/MyListings";

export default function MySellingList() {
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
      <h1>My selling list</h1>
      <Flex gap="1.5rem" flexWrap="wrap" justifyContent="center">
        {mainUser.listings.map((listing) => {
          return (
            <StarshipCard
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
