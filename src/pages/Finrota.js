import React from "react";
import StyledPageLayout from "../styled-components/StyledPageLayout.styles";
import StyledCompanyInfo from "../styled-components/StyledCompInfo.styles";
import StyledCompanyDetail from "../styled-components/StyledCompDetail.styles";
import { finrotaDetail } from "../constants/company-details";
import { StyledCompanyButton } from "../styled-components/StyledButton.styles";

const Finrota = () => {
  return (
    <StyledPageLayout>
      <StyledCompanyInfo $companyColor="finrota">
        <h1 className="company-title">Finrota</h1>
        <StyledCompanyDetail>{finrotaDetail}</StyledCompanyDetail>
        <StyledCompanyButton
          as="a"
          href="https://finrota.com/"
          target="_blank"
          $companyColor="finrota"
        >
          Şirket Sayfasına Git
        </StyledCompanyButton>
      </StyledCompanyInfo>
    </StyledPageLayout>
  );
};

export default Finrota;
