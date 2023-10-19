import MyListings from "@/components/MyListings";
import { StyledPageTitle } from "@/components/Layout/StyledTitles";
import { StyledBackLink } from "@/components/Layout/StyledLinkAndButton";
import { HiArrowLeft } from "react-icons/hi";

export default function MySellingList() {
  return (
    <>
      <StyledBackLink href={"/my-profile"}>
        <HiArrowLeft gap="10px" />
      </StyledBackLink>
      <StyledPageTitle>My Selling List</StyledPageTitle>
      <MyListings />
    </>
  );
}
