import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";

import { Providers } from "../../providers";
import GoogleFonts from "fonts/GoogleFonts";
import "../../../app/globals.css";
import Navbar from "layouts/Main/components/Navbar";
import Footer from "layouts/Main/components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import BottomNavigation from "layouts/Main/components/Navbar/BottomNavigation";
import Features from "layouts/Main/components/Features";
import Analytics from "components/Analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesList = cookies();
  const colorMode = cookiesList.get("chakra-ui-color-mode");

  return (
    <html lang="tr">
      <head>
        <GoogleFonts />
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <Analytics position="head" />
      </head>
      <body>
        <Providers colorMode={colorMode?.value}>
          <>
            <Flex direction={"column"} >
              <Navbar />
              {children}
              <Footer />
            </Flex>
          </>
        </Providers>
        <Analytics position="body" />
      </body>
    </html>
  );
}
