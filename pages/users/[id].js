import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import UserList from "@/components/UserListings";
import { HiArrowLeft } from "react-icons/hi";

const StyledUserImage = styled(Image)`
  margin-top: 30px;
  border-radius: 50%;
  border: solid 1px #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  object-position: top;
  object-fit: cover;
`;

const StyledUserName = styled.div`
  width: 16.25rem;
  height: 2.5rem;
  padding: 7px;
  border-radius: 6px;
  border: 0.5px solid #baf0e0;
  text-align: center;
  color: var(--secondary-color);
`;

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, isLoading } = useSWR(id ? `/api/users/${id}` : null);
  if (!user || isLoading) {
    return <div>Loading...</div>;
  }

  const { name, avatar, starships, listings, _id, credits } = user;

  return (
    <>
      <button
        style={{
          background: "transparent",
          borderColor: "transparent",
          fontSize: "16px",
        }}
        type="button"
        onClick={() => router.back()}
      >
        <HiArrowLeft gap="10px" color="white" />
      </button>
      <Flex direction="column" alignItems="center" gap="30px">
        <StyledUserImage alt={name} src={avatar} width={140} height={140} />
        <StyledUserName>{name}</StyledUserName>
        <p style={{ color: "#cdffbb", fontSize: "1.1rem" }}>
          This user is selling:
        </p>
        <UserList
          listings={listings}
          starships={starships}
          userId={_id}
          userCredits={credits}
        />
      </Flex>
    </>
  );
}
