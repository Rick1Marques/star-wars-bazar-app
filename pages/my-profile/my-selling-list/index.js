import MyListings from "@/components/MyListings";
import { StyledPageTitle } from "@/components/Layout/StyledPageTitle";
import { StyledBackLink } from "@/components/Layout/StyledBackLink";

export default function MySellingList() {
  return (
    <>
      <StyledBackLink href={"/my-profile"}>Back</StyledBackLink>
      <StyledPageTitle>My selling list</StyledPageTitle>
      <MyListings />
    </>
  );
}
