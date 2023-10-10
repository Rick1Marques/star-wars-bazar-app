import Flex from "../Layout/Flex";
import { StyledButton } from "../Layout/StyledButton";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 2px;
  flex-wrap: nowrap;
  padding: 5px;
`;

const StyledLabel = styled.label`
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  background: linear-gradient(90deg, #CDFFBB 50%, rgba(143, 238, 204, 0.00) 221.43%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent:
`;

export default function NewOfferForm({ credit, onSubmit, user, starship }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit({
      ...data,
      user: user._id,
      starship: starship._id,
    });
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Flex flexDirection="row">
        <StyledLabel htmlFor="price">Price: </StyledLabel>
        <input
          type="number"
          name="price"
          id="price"
          placeholder={credit}
          required
        />
      </Flex>

      <StyledButton marginTop="10px" type="submit">
        Submit
      </StyledButton>
    </StyledForm>
  );
}
