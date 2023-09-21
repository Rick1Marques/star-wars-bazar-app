import useSWR from "swr";
import Flex from "../Layout/Flex";

import StarshipCard from "../StarshipCard";

export default function StarshipList() {
  const { data: starships, isLoading } = useSWR("/api/starships/");
  if (!starships || isLoading) {
    return "Loading...";
  }
  // console.log(starships);
  return (
    <Flex gap="26px" flexWrap="wrap" justifyContent="center">
      {starships.map((starship) => (
        <StarshipCard key={starship._id} {...starship} />
      ))}
    </Flex>
  );
}
