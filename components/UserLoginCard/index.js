import Flex from "../Layout/Flex";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { useState } from "react";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImageWrapper = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const StyledStarshipImage = styled(Image)`
  object-fit: cover;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const StyledParagraph = styled.p`
  color: var(--secondary-color);
  text-align: center;
  font-size: 2rem;
`;

const StyledButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  width: auto;
  height: auto;
`;

export default function UserLoginCard({ name, avatar, userId }) {
  const { login } = useUser();
  console.log(userId);

  return (
    <Flex direction="column" alignItems="center" gap="1rem">
      <StyledButton type="button" onClick={() => login(userId)}>
        <StyledImageWrapper>
          <StyledStarshipImage
            src={avatar}
            alt={name}
            height={0}
            width={0}
            layout="responsive"
          />
        </StyledImageWrapper>
        <StyledParagraph>{name}</StyledParagraph>
      </StyledButton>
    </Flex>
  );
}
