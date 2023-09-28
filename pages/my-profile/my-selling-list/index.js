import useSWR from "swr";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import StarshipCard from "@/components/StarshipCard";
import MyListings from "@/components/MyListings";

export default function MySellingList() {
  return (
    <>
      <h1>My selling list</h1>
      <MyListings />
    </>
  );
}
