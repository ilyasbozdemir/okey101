import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Rsrichsoul - Erkek Giyim",
  description: "Rsrichsoul, şık ve kaliteli erkek giyim ürünleri sunan bir platformdur. Gizlilik politikamız hakkında detaylı bilgiye buradan ulaşabilirsiniz.",
};

function PrivacyPolicyPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.PrivacyPolicy} />
    </>
  );
}

export default PrivacyPolicyPage;
