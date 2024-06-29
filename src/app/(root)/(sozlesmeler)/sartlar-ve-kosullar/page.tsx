import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hüküm ve Koşullar | Rsrichsoul - Erkek Giyim",
  description: "Rsrichsoul, şık ve kaliteli erkek giyim ürünleri sunan bir platformdur. Hüküm ve koşullarımız hakkında detaylı bilgiye buradan ulaşabilirsiniz.",
};

function TermsAndConditionsPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.TermsAndConditions} />
    </>
  );
}

export default TermsAndConditionsPage;
