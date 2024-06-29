import React from "react";
import HelpCenter from "../../../../components/Main/(Contract)/HelpCenter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yardım Merkezi | Bir Saate - Eğitim Videoları Platformu",
  description: "Bir Saate, eğitim videolarının bulunduğu interaktif bir platformdur. Alanında uzman eğitmenler tarafından hazırlanan bir saatlik derslerle kendinizi geliştirin ve yeni beceriler edinin.",
};


function FaqPage() {
  return (
    <>
      <HelpCenter />
    </>
  );
}

export default FaqPage;
