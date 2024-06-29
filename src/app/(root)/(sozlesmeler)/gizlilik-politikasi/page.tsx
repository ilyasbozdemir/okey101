import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";


function PrivacyPolicyPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.PrivacyPolicy} />
    </>
  );
}

export default PrivacyPolicyPage;
