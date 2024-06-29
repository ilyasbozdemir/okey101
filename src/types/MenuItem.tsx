import React from "react";

export type MenuItem = {
  type: "link" | "group";
  logoSrc?: string | React.JSX.Element;
  title: string;
  href?: string;
  children?: MenuItem[];
  iconColor?: string;
};
