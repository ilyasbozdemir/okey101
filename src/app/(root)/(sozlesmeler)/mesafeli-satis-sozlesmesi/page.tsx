import React from "react";
import ContractContainer from "../../../../containers/Main/Contract";
import ContractPage from "../../../../enums/ContractPage";
import { Metadata } from "next";


function DistanceSalesContractPage() {
  return (
    <>
      <ContractContainer currentPage={ContractPage.DistanceSalesContract} />
    </>
  );
}

export default DistanceSalesContractPage;