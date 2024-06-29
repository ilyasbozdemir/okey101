import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";



function MembershipAgreementPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.MembershipAgreement} />
    </>
  );
}

export default MembershipAgreementPage;
