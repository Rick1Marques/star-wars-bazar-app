import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";

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
      <Flex>
        <Link href={"/marketplace"}>Back</Link>
        <h1>{name}</h1>
      </Flex>
      <Flex>
        <Image src={img} alt={name} height={285} width={330} />
        <ul>
          <li>
            <p>
              Model:
              <span>{model}</span>
            </p>
          </li>
          <li>
            <p>
              Manufacturer:
              <span>{manufacturer}</span>
            </p>
          </li>
          <li>
            <p>
              {" "}
              Max. atmosphering speed:
              <span>{max_atmosphering_speed}</span>
            </p>
          </li>
          <li>
            <p>
              {" "}
              Passengers:
              <span>{passengers}</span>
            </p>
          </li>
          <li>
            <p>
              {" "}
              Cargo capacity:
              <span>{cargo_capacity}</span>
            </p>
          </li>
          <li>
            <p>
              Starship class:
              <span>{starship_class}</span>
            </p>
          </li>
        </ul>
      </Flex>
    </>
  );
}
