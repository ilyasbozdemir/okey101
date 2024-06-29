import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi | Rsrichsoul - Erkek Giyim",
  description: "Rsrichsoul, şık ve kaliteli erkek giyim ürünleri sunan bir platformdur. Mesafeli satış sözleşmemiz hakkında detaylı bilgiye buradan ulaşabilirsiniz.",
};

function DistanceSalesContractPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.DistanceSalesContract} />
    </>
  );
}

export default DistanceSalesContractPage;