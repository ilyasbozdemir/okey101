// app/providers.tsx
"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import { extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { styles } from "../foundations/styles";
import { config } from "../foundations/config";
import { colors } from "../foundations/colors";
import { fonts } from "../foundations/fonts";
import { fontSizes } from "../foundations/fontSizes";
import { fontWeights } from "../foundations/fontWeights";
import { lineHeights } from "../foundations/lineHeights";
import { letterSpacings } from "../foundations/letterSpacings";
import { breakpoints } from "../foundations/breakpoints";
import { space } from "../foundations/space";
import { sizes } from "../foundations/sizes";
import { zIndices } from "..//foundations/zIndices";
import { shadows } from "../foundations/shadows";

const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  shadows,
  space,
  sizes,
  zIndices,
});

export default theme;

export function Providers({
  children,
  colorMode,
}: {
  children: React.ReactNode;
  colorMode?: any;
}) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider
          resetCSS
          theme={theme}
          colorModeManager={{
            type: "cookie",
            ssr: true,
            get: (init) => colorMode ?? init,
            set: (value) => {
              setCookie("chakra-ui-color-mode", value);
            },
          }}
        >
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            type="cookie"
          />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
