import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding-top: 5px;
  background: linear-gradient(
    90deg,
    #baf0e0 -225%,
    rgba(64, 64, 64, 0) 133.33%
  );
  color: rgba(243, 243, 243, 1);
  border-radius: 5px;
  border-width: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 2rem;
  width: 6.25rem;
  margin-top: 10px;
`;
