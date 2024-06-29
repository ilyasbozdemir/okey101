import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";

import { Box, Button, Flex } from "@chakra-ui/react";
import { SidebarProps } from "interfaces/SidebarProps";
import { MenuItem } from "types/MenuItem";
import { adminBasePath, adminMenuItems } from "constants/menuItems";

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [logo, setLogo] = useState<string>("/images/logo.png");
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = true;
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === true
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const NavigationMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
    const renderMenuItem = (item: MenuItem) => {
      if (item.type === "link") {
        return (
          <Box as={"li"} key={item.title}>
            <Link
              href={item.href}
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-white ${
                pathname === item.href ? "bg-red" : ""
              }`}
            >
              <Box as={"span"} color={item.iconColor}>
                {item.logoSrc}
              </Box>
              <Box
                as={"span"}
                fontSize={{
                  base: "sm",
                  lg: "md",
                }}
              >
                {item.title}
              </Box>
            </Link>
          </Box>
        );
      } else if (item.type === "group") {
        return (
          <Box as={"li"} key={item.title}>
            <SidebarLinkGroup
              activeCondition={item.children?.some((child) =>
                pathname.includes(child.href)
              )}
            >
              {(handleClick, open) => (
                <>
                  <Flex
                    as={Button}
                    justifyContent={"space-between"}
                    w={"full"}
                    gap={1}
                    variant={"unstyled"}
                    className={`flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-white ${
                      item.children?.some((child) =>
                        pathname.includes(child.href)
                      )
                        ? "bg-white"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      sidebarExpanded
                        ? handleClick()
                        : setSidebarExpanded(true);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <Box as={"span"} color={item.iconColor}>
                        {item.logoSrc}
                      </Box>
                      <Box
                        as={"span"}
                        fontSize={{
                          base: "sm",
                          lg: "md",
                        }}
                      >
                        {item.title}
                      </Box>
                    </span>
                    <svg
                      className={`fill-current ${open ? "rotate-180" : ""}`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                        fill=""
                      />
                    </svg>
                  </Flex>

                  <div
                    className={`translate transform overflow-hidden ${
                      !open ? "hidden" : ""
                    }`}
                  >
                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                      {item.children?.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.href || "#"}
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out ${
                              pathname === (child.href || "")
                                ? "text-orange-500"
                                : ""
                            }`}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </SidebarLinkGroup>
          </Box>
        );
      }
    };

    return (
      <Flex as='ul' gap={3} className="mb-6 flex flex-col">
        {items.map(renderMenuItem)}
      </Flex>
    );
  };

  return (
    <Box
      as={"aside"}
      bg={"linear-gradient(135deg, #f0f0f0, #FFF5F5)"}
      shadow={"md"}
      ref={sidebar}
      className={`h-full absolute left-0 top-0 z-9999 flex w-72.5 flex-col overflow-y-hidden bg-gray-50 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <div className="pt-[10px]">
          <Link href={adminBasePath}>
            <Image width={138} height={40} src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col custom-scrollbar overflow-y-auto duration-350 ease-linear">
        <nav className="flex flex-col gap-10 mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <Box
            fontFamily={"Montserrat"}
            fontSize={{
              base: "sm",
              lg: "lg",
            }}
          >
            <NavigationMenu items={adminMenuItems} />
          </Box>
        </nav>
      </div>
    </Box>
  );
};

export default Sidebar;
