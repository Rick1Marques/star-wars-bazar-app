import MyCollectionList from "@/components/MyCollectionList";
import { StyledPageTitle } from "@/components/Layout/StyledPageTitle";
import { StyledBackLink } from "@/components/Layout/StyledBackLink";

export default function MyCollection() {
  return (
    <main>
      <StyledBackLink href={"/my-profile"}>Back</StyledBackLink>
      <StyledPageTitle>My collection</StyledPageTitle>
      <MyCollectionList />
    </main>
  );
}
