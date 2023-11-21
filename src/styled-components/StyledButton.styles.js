import styled, { css } from "styled-components";

const companyButtonStyles = ({ $companyColor }) => {
  if ($companyColor === "paramtech") {
    return css`
      color: #3a0b85;
      border: 2px solid #3a0b85;
      &:hover {
        color: #fff;
        background: #3a0b85;
      }
    `;
  } else if ($companyColor === "finrota") {
    return css`
      color: #ff671d;
      border: 2px solid #ff671d;
      &:hover {
        color: #fff;
        background: #ff671d;
      }
    `;
  } else if ($companyColor === "kredim") {
    return css`
      color: #25d07c;
      border: 2px solid #25d07c;
      &:hover {
        color: #fff;
        background: #25d07c;
      }
    `;
  }
};

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${(props) => props.$buttonColor || "#F05941"};
  color: #fff;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s all ease-out;
  font-size: 16px;
  border: none;
  box-sizing: border-box;
`;

export const StyledCompanyButton = styled(StyledButton)`
  ${companyButtonStyles}
  margin-left: auto;
  width: max-content;
  background: #fff;
`;

export default StyledButton;
