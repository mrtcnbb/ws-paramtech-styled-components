import { css } from "styled-components";

const applyGlobalStyles = (props) => css`
  ${props.$mt10 && "margin-top: 10px"}
`;

export default applyGlobalStyles;
