import React from "react";

interface GoogleTagManagerBodyProps {
  code: string;
}

const GoogleTagManagerBody: React.FC<GoogleTagManagerBodyProps> = ({ code }) => {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${code}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
};

export default GoogleTagManagerBody;
