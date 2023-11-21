import styled from "styled-components";

const StyledPageLayout = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  flex-direction: row;
  margin: 75px auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default StyledPageLayout;
