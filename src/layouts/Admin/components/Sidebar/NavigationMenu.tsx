import React from "react";
import { Flex, Box, Button, Collapse, Icon } from "@chakra-ui/react";
import { MenuItem } from "types/MenuItem";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface NavigationMenuProps {
  items: MenuItem[];
  isCollapsed: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, isCollapsed }) => {
  const pathname = usePathname();

  return (
    <Flex as="ul" direction="column" gap={3} className="mb-6">
      {items.map((item) => (
        <SidebarLinkGroup key={item.title} activeCondition={pathname.includes(item.href)}>
          {(handleClick, open) => (
            <>
              {item.type === "link" && (
                <Link
                  href={item.href}
                  className={`group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-gray-200 ${
                    pathname === item.href ? "bg-gray-200 text-orange-500" : ""
                  }`}
                >
                  <Box as={"span"} color={item.iconColor}>
                    {item.logoSrc}
                  </Box>
                  {!isCollapsed && (
                    <Box
                      as={"span"}
                      fontSize={{
                        base: "sm",
                        lg: "md",
                      }}
                    >
                      {item.title}
                    </Box>
                  )}
                </Link>
              )}
              {item.type === "group" && (
                <>
                  <Flex
                    as={Button}
                    justifyContent={"space-between"}
                    w={"full"}
                    gap={1}
                    variant={"unstyled"}
                    className={`flex items-center gap-3 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-gray-200 ${
                      item.children?.some((child) => pathname.includes(child.href))
                        ? "bg-gray-200 text-orange-500"
                        : ""
                    }`}
                    onClick={handleClick}
                  >
                    <span className="flex items-center gap-3">
                      <Box as={"span"} color={item.iconColor}>
                        {item.logoSrc}
                      </Box>
                      {!isCollapsed && (
                        <Box
                          as={"span"}
                          fontSize={{
                            base: "sm",
                            lg: "md",
                          }}
                        >
                          {item.title}
                        </Box>
                      )}
                    </span>
                    {!isCollapsed && <Icon as={open ? FiChevronDown : FiChevronRight} />}
                  </Flex>
                  <Collapse in={open && !isCollapsed} animateOpacity>
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
                  </Collapse>
                </>
              )}
            </>
          )}
        </SidebarLinkGroup>
      ))}
    </Flex>
  );
};

export default NavigationMenu;
