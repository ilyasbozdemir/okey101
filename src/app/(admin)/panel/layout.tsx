import { Providers } from "../../providers";
import { cookies } from "next/headers";
import GoogleFonts from "../../../fonts/GoogleFonts";
import AdminLayout from "../../../layouts/Admin/layout";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import { Metadata } from "next";





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesList = cookies();
  const colorMode = cookiesList.get("chakra-ui-color-mode");

  return (
    <html lang={"tr"} dir={"ltr"}>
      <head>
        <GoogleFonts />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        
      </head>
      <body suppressHydrationWarning={true}>
     
        <Providers colorMode={colorMode?.value}>
          <Theme>
            <AdminLayout>{children}</AdminLayout>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
