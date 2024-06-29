import React from "react";
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface PagButtonProps {
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const PagButton: React.FC<PagButtonProps> = (props) => {
  const activeStyle = {
    bg: "#FFBD00",
    _dark: {
      bg: "#FFA500 ",
    },
    color: "white",
  };

  return (
    <Button
      mx={1}
      px={4}
      py={2}
      rounded="md"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      color="gray.700"
      opacity={props.disabled ? 0.6 : 1}
      _hover={!props.disabled ? activeStyle : undefined}
      cursor={props.disabled ? "not-allowed" : "pointer"}
      {...(props.active && activeStyle)}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  pageSize: number;
  pageSizes: number[];
  totalLength: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSize,
  pageSizes,
  totalLength,
}) => {
  const maxPageButtons = 10; // Maximum number of page buttons to show at once

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const getPageNumbers = () => {
    let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    let endPage = startPage + maxPageButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Ensure first and last pages are always visible
    if (startPage > 1) {
      pageNumbers.unshift(1);
      if (startPage > 2) {
        pageNumbers.splice(1, 0, "...");
      }
    }
    if (endPage < totalPages) {
      pageNumbers.push(totalPages);
      if (endPage < totalPages - 1) {
        pageNumbers.splice(pageNumbers.length - 1, 0, "...");
      }
    }

    return pageNumbers;
  };
  const PaginationInfo = ({ currentPage, pageSize, totalLength }) => {
    const getPageNumbers = () => {
      const startNumber = currentPage === 1 ? 0 : currentPage - 1;

      const start = startNumber * pageSize + 1;
      const end =
        (startNumber + 1) * pageSize > totalLength
          ? totalLength
          : (startNumber + 1) * pageSize;

      return `${start} - ${end} / ${totalLength} Paket`;
    };

    return (
      <Flex justifyContent={"center"}>
        <Text as={"small"} pb={2} color={"gray.700"}>
          {getPageNumbers()}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex
      bg="#FFF3F399"
      _dark={{
        bg: "#FFF3F399",
      }}
      direction={"column"}
    >
      <Flex p={4} w="full" alignItems="center" justifyContent="space-between">
        <Flex>
          <PagButton onClick={handlePrev} disabled={currentPage === 1}>
            <Icon
              as={IoIosArrowBack}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
              boxSize={4}
            />
          </PagButton>
          {getPageNumbers().map((pageNumber, index) => (
            <PagButton
              key={index}
              onClick={() =>
                typeof pageNumber === "number" && goToPage(pageNumber)
              }
              active={currentPage === pageNumber}
              disabled={typeof pageNumber !== "number"}
            >
              {pageNumber}
            </PagButton>
          ))}
          <PagButton onClick={handleNext} disabled={currentPage === totalPages}>
            <Icon
              as={IoIosArrowForward}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
              boxSize={4}
            />
          </PagButton>
        </Flex>
        <Menu>
          <MenuButton
            as={Button}
            bg={"#FFF3F366"}
            rightIcon={<ChevronDownIcon />}
          >
            {pageSize} / Sayfa
          </MenuButton>
          <MenuList>
            {pageSizes.map((size) => (
              <MenuItem key={size} onClick={() => onPageSizeChange(size)}>
                {size} / Sayfa
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      <Flex justifyContent={"center"}>
        <Text as={"span"} pb={2} color={"gray.700"}>
          <PaginationInfo
            currentPage={currentPage}
            pageSize={pageSize}
            totalLength={totalLength}
          />
        </Text>
      </Flex>
    </Flex>
  );
};

export default Pagination;
