import styled from "styled-components";

const titleColor = ({ $companyColor }) => {
  if ($companyColor === "paramtech") {
    return "#3a0b85";
  } else if ($companyColor === "finrota") {
    return "#ff671d";
  } else if ($companyColor === "kredim") {
    return "#25d07c";
  }
};

const StyledCompanyInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;

  .company-title {
    font-weight: 400;
    font-size: 48px;
    margin: 0;
    color: ${(props) => titleColor(props)};
  }
`;
export default StyledCompanyInfo;
