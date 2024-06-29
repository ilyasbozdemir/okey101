import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";


function CookiePolicyPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.CookiePolicy} />
    </>
  );
}

export default CookiePolicyPage;
