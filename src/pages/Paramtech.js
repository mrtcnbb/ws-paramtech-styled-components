import React from "react";
import StyledPageLayout from "../styled-components/StyledPageLayout.styles";
import StyledCompanyInfo from "../styled-components/StyledCompInfo.styles";
import StyledCompanyDetail from "../styled-components/StyledCompDetail.styles";
import { paramtechDetail } from "../constants/company-details";
import { StyledCompanyButton } from "../styled-components/StyledButton.styles";

const Paramtech = () => {
  return (
    <StyledPageLayout as="main">
      <StyledCompanyInfo $companyColor="paramtech">
        <h1 className="company-title">Paramtech</h1>
        <StyledCompanyDetail>{paramtechDetail}</StyledCompanyDetail>
        <StyledCompanyButton
          as="a"
          href="https://www.paramtech.com.tr/"
          target="_blank"
          $companyColor="paramtech"
        >
          Şirket Sayfasına Git
        </StyledCompanyButton>
      </StyledCompanyInfo>
    </StyledPageLayout>
  );
};

export default Paramtech;
