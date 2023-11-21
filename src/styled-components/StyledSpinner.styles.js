import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  height: 15px;
  width: 15px;
  border: 2px solid #fff;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

export default StyledSpinner;
