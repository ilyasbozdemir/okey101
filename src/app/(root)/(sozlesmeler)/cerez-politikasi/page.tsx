import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | Rsrichsoul - Erkek Giyim",
  description: "Rsrichsoul, şık ve kaliteli erkek giyim ürünleri sunan bir platformdur. Çerez politikamız hakkında detaylı bilgiye buradan ulaşabilirsiniz.",
};

function CookiePolicyPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.CookiePolicy} />
    </>
  );
}

export default CookiePolicyPage;
