import useSWR from "swr";
//import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";

export default function Profile() {
  const { data: users, isLoading } = useSWR("/api/users");
  if (!users || isLoading) {
    return <h1>Loading...</h1>;
  }
  const mainUser = users[0];
  return (
    <>
      <h1>My Profile</h1>
      <Image
        alt={mainUser.name}
        src={mainUser.avatar}
        width={140}
        height={140}
      />
      <h2>{mainUser.name}</h2>
      <h2>
        Credits: <span>{mainUser.credits}</span>
      </h2>
    </>
  );
}
