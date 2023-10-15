import styled from "styled-components";
import Image from "next/image";
import Flex from "@/components/Layout/Flex";
import Link from "next/link";
import useUser from "@/hooks/useUser";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
`;
const StyledImageWrapper = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
const StyledButton = styled.button`
  border-radius: 50%;
  padding: 0;
  border: 0;
`;

const StyledUserImage = styled(Image)`
  fill: #303030;
  stroke-width: 1px;
  stroke: #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  object-position: top;
  object-fit: cover;
`;

const StyledImageThemeWrapper = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const StyledThemeImage = styled(Image)`
  fill: #303030;
  stroke-width: 1px;
  stroke: #646464;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  object-position: top;
  object-fit: cover;
`;

const StyledNameFrame = styled.div`
  width: 16.25rem;
  height: 2.5rem;
  padding-top: 7px;
  border-radius: 6px;
  text-align: center;
  background: #2c2c2c;
`;

const StyledProfileTitle = styled.h1`
  margin-top: 30px;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledTitleCredit = styled.h2`
  margin-top: 5px;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
  background: linear-gradient(90deg, #8feecc 0%, rgba(215, 218, 53, 0.65) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledCredit = styled.p`
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 50px;
  height: 10px;
`;
const StyledName = styled.p`
  color: var(--secondary-color);
  margin-top: 2px;
`;

export default function MyProfile({ mainUser }) {
  const { mainTheme, theme } = useUser();
  if (!mainUser) {
    return "Loading";
  }

  return (
    <main>
      <Flex direction="column" alignItems="center" gap="30px">
        <StyledProfileTitle>My Profile</StyledProfileTitle>
        <StyledImageWrapper className={mainTheme}>
          <StyledUserImage
            alt={mainUser.name}
            src={mainUser.avatar}
            height={0}
            width={0}
            layout="responsive"
          />
        </StyledImageWrapper>

        <StyledNameFrame className={mainTheme}>
          <StyledName>{mainUser.name}</StyledName>
        </StyledNameFrame>
        <Flex direction="column" alignItems="center">
          <StyledTitleCredit>Total amount of credits:</StyledTitleCredit>
          <StyledCredit>
            {mainUser.credits === null
              ? 0
              : mainUser.credits.toLocaleString("en-US")}
          </StyledCredit>
        </Flex>
        <StyledNameFrame className={mainTheme}>
          <StyledLink href="/my-profile/my-collection">
            My Collection
          </StyledLink>{" "}
        </StyledNameFrame>
        <StyledNameFrame className={mainTheme}>
          <StyledLink href="/my-profile/my-selling-list">
            My Selling List
          </StyledLink>
        </StyledNameFrame>
        <StyledTitleCredit>Choose your theme</StyledTitleCredit>
        <Flex width="70%" justifyContent="space-around">
          <StyledButton onClick={() => theme("red")} className="red">
            <StyledImageThemeWrapper>
              <StyledThemeImage
                alt="Sith logo"
                src="https://m.media-amazon.com/images/I/51f7d5vaMGL._AC_UF894,1000_QL80_.jpg"
                height={0}
                width={0}
                layout="responsive"
              />
            </StyledImageThemeWrapper>
          </StyledButton>
          <StyledButton onClick={() => theme("green")} className="green">
            <StyledImageThemeWrapper>
              <StyledThemeImage
                alt="Jedi logo"
                src={
                  "https://img.elo7.com.br/product/zoom/314BBC3/adesivo-branco-starwars-ordem-jedi-10x10cm-alianca.jpg"
                }
                height={0}
                width={0}
                layout="responsive"
              />
            </StyledImageThemeWrapper>
          </StyledButton>
        </Flex>
      </Flex>
    </main>
  );
}
