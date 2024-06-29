import type { Metadata } from "next";
import { Providers } from "../.././providers";
import "../../../app/globals.css";
import { cookies } from "next/headers";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../../../layouts/Contract/components/Navbar";
import GoogleFonts from "../../../fonts/GoogleFonts";
import Footer from "layouts/Main/components/Footer";

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
      </head>
      <Box as={"body"}>
        <Providers colorMode={colorMode?.value}>
          <Flex direction={"column"}>
            <Navbar />
            {children}
            <Footer />
          </Flex>
        </Providers>
      </Box>
    </html>
  );
}
