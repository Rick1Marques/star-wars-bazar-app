import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex: ${({ $flex }) => $flex};
  padding: ${({ $padding }) => $padding};
  gap: ${({ $gap }) => $gap};
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  heigth: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  & > * {
    margin: 0;
  }
`;

export default function Flex({
  as = "div",
  children,
  padding = 0,
  gap = "1rem",
  direction = "row",
  justifyContent = "start",
  flexWrap = "nowrap",
  height = "auto",
  width = "auto",
  alignItems,
  flex,
}) {
  return (
    <StyledFlex
      as={as}
      $flex={flex}
      $padding={padding}
      $gap={gap}
      $direction={direction}
      $justifyContent={justifyContent}
      $flexWrap={flexWrap}
      $height={height}
      $width={width}
      $alignItems={alignItems}
    >
      {children}
    </StyledFlex>
  );
}
