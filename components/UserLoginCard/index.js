import Flex from "../Layout/Flex";
import styled from "styled-components";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

const StyledImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 1px #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const StyledStarshipImage = styled(Image)`
  top: 0;
  bottom: 0;
  margin: auto;
`;

const StyledParagraph = styled.p`
  color: var(--secondary-color);
  text-align: center;
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
  const router = useRouter();
  const { login } = useUser();
  function loginAction(id) {
    login(id);
    router.push(`/my-profile`);
  }
  return (
    <Flex direction="column" alignItems="center" gap="1rem">
      <StyledButton type="button" onClick={() => loginAction(userId)}>
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
