import useSWR from "swr";

import StarshipCard from "../StarshipCard";

export default function StarshipList() {
  const { data: starships, isLoading } = useSWR("/api/starships/");
  if (!starships || isLoading) {
    return "Loading...";
  }
  console.log(starships);
  return;
  <></>;
}
