"use client";

import React from "react";
import FacebookPixel from "plugins/FacebookPixel";
import GoogleAnalytics from "plugins/GoogleAnalytics";
import GoogleTagManager from "plugins/GoogleTagManager";
import GoogleTagManagerBody from "plugins/GoogleTagManagerBody";
import PinterestAnalytics from "plugins/PinterestAnalytics";
import TiktokPixel from "plugins/TiktokPixel";

const analyticsCodes = {
  facebook: { code: "", enabled: false, position: "head" },
  googleAnalytics: { code: "G-Q2VTG7R629", enabled: true, position: "head" },
  googleTagManager: { code: "", enabled: false, position: "head" },
  pinterest: { code: "", enabled: false, position: "body" },
  tiktok: { code: "", enabled: false, position: "body" },
};

const Analytics = ({ position }: { position: "head" | "body" }) => {
  return (
    <>
      {analyticsCodes.facebook.enabled && analyticsCodes.facebook.position === position && (
        <FacebookPixel code={analyticsCodes.facebook.code} />
      )}
      {analyticsCodes.googleAnalytics.enabled && analyticsCodes.googleAnalytics.position === position && (
        <GoogleAnalytics code={analyticsCodes.googleAnalytics.code} />
      )}
      {analyticsCodes.googleTagManager.enabled && analyticsCodes.googleTagManager.position === position && (
        <>
          {position === "head" && <GoogleTagManager code={analyticsCodes.googleTagManager.code} />}
          {position === "body" && <GoogleTagManagerBody code={analyticsCodes.googleTagManager.code} />}
        </>
      )}
      {analyticsCodes.pinterest.enabled && analyticsCodes.pinterest.position === position && (
        <PinterestAnalytics code={analyticsCodes.pinterest.code} />
      )}
      {analyticsCodes.tiktok.enabled && analyticsCodes.tiktok.position === position && (
        <TiktokPixel code={analyticsCodes.tiktok.code} />
      )}
    </>
  );
};

export default Analytics;
