import useSWR from "swr";
import { useRouter } from "next/router";

export default function Starship() {
  const router = useRouter();
  const { id } = router.query;
  const { data: starship, isLoading } = useSWR(
    id ? `/api/starships/${id}` : null
  );
  if (!starship || isLoading) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    model,
    manufacturer,
    max_atmosphering_speed,
    passengers,
    cargo_capacity,
    starship_class,
    img,
  } = starship;

  return (
    <>
      <div>{name}</div>
    </>
  );
}
