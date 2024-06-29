import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";


function TermsAndConditionsPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.TermsAndConditions} />
    </>
  );
}

export default TermsAndConditionsPage;
