import React from "react";
import StyledPageLayout from "../styled-components/StyledPageLayout.styles";
import StyledCompanyInfo from "../styled-components/StyledCompInfo.styles";
import StyledCompanyDetail from "../styled-components/StyledCompDetail.styles";
import { kredimDetail } from "../constants/company-details";
import { StyledCompanyButton } from "../styled-components/StyledButton.styles";

const Kredim = () => {
  return (
    <StyledPageLayout>
      <StyledCompanyInfo $companyColor="kredim">
        <h1 className="company-title">Kredim</h1>
        <StyledCompanyDetail>{kredimDetail}</StyledCompanyDetail>
        <StyledCompanyButton
          as="a"
          href="https://www.kredim.com.tr/"
          target="_blank"
          $companyColor="kredim"
        >
          Şirket Sayfasına Git
        </StyledCompanyButton>
      </StyledCompanyInfo>
    </StyledPageLayout>
  );
};

export default Kredim;
