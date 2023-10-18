import MyCollectionList from "@/components/MyCollectionList";
import { StyledPageTitle } from "@/components/Layout/StyledTitles";
import { StyledBackLink } from "@/components/Layout/StyledBackLink";
import { HiArrowLeft } from "react-icons/hi";

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
