import MyCollectionList from "@/components/MyCollectionList";
import { StyledPageTitle } from "@/components/Layout/StyledPageTitle";
import { StyledBackLink } from "@/components/Layout/StyledBackLink";
import { HiArrowLeft } from "react-icons/hi";
import Flex from "@/components/Layout/Flex";

export default function MyCollection() {
  return (
    <main>
      <StyledBackLink href={"/my-profile"}>
        <HiArrowLeft gap="10px" />
      </StyledBackLink>
      <StyledPageTitle>My collection</StyledPageTitle>
      <MyCollectionList />
    </main>
  );
}
