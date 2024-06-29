import React from "react";

interface GoogleAnalyticsProps {
  code: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ code }) => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${code}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${code}');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;
