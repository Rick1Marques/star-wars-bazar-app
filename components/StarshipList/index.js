import useSWR from "swr";
import Flex from "../Layout/Flex";
import Link from "next/link";

import StarshipCard from "../StarshipCard";

export default function StarshipList() {
  const { data: starships, isLoading } = useSWR("/api/starships");
  if (!starships || isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Flex gap="1.5rem" flexWrap="wrap" justifyContent="center">
      {starships.map((starship) => {
        return (
          <Link href={`/starships/${starship._id}`} key={starship._id}>
            <StarshipCard {...starship} />
          </Link>
        );
      })}
    </Flex>
  );
}
