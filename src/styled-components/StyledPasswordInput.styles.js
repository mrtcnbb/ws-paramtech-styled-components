import styled from "styled-components";
import StyledInput from "./StyledInput.styles";

const StyledPassword = styled(StyledInput).attrs({
  type: "password",
  placeholder: "Şifre",
})``;

export default StyledPassword;
