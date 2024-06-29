import React from "react";

interface PinterestAnalyticsProps {
  code: string;
}

const PinterestAnalytics: React.FC<PinterestAnalyticsProps> = ({ code }) => {
  return (
    <>
      <meta name="p:domain_verify" content={code} />
    </>
  );
};

export default PinterestAnalytics;
