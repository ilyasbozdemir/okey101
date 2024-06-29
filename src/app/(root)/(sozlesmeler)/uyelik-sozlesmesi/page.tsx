import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Üyelik Sözleşmesi | Rsrichsoul - Erkek Giyim",
  description: "Rsrichsoul, şık ve kaliteli erkek giyim ürünleri sunan bir platformdur. Üyelik sözleşmemiz hakkında detaylı bilgiye buradan ulaşabilirsiniz.",
};

function MembershipAgreementPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.MembershipAgreement} />
    </>
  );
}

export default MembershipAgreementPage;
