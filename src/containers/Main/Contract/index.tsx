"use client";

import React from "react";
import CookiePolicy from "../../../components/Main/(Contract)/CookiePolicy";
import PrivacyPolicy from "../../../components/Main/(Contract)/PrivacyPolicy";
import DistanceSalesContract from "../../../components/Main/(Contract)/DistanceSalesContract";
import TermsAndConditions from "../../../components/Main/(Contract)/TermsAndConditions";
import MembershipAgreement from "../../../components/Main/(Contract)/MembershipAgreement";
import {
  Box,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import ContractPage from "../../../enums/ContractPage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
interface Section {
  id: string;
  name: string;
  component: JSX.Element;
}

interface ContractContainerProps {
  currentPage: string;
}

const sections: Section[] = [
  {
    id: ContractPage.CookiePolicy,
    name: "Çerez Politikası",
    component: <CookiePolicy />,
  },
  {
    id: ContractPage.PrivacyPolicy,
    name: "Gizlilik Politikası",
    component: <PrivacyPolicy />,
  },
  {
    id: ContractPage.DistanceSalesContract,
    name: "Mesafeli Satış Sözleşmesi",
    component: <DistanceSalesContract />,
  },
  {
    id: ContractPage.TermsAndConditions,
    name: "Şartlar ve Koşullar",
    component: <TermsAndConditions />,
  },
  {
    id: ContractPage.MembershipAgreement,
    name: "Üyelik Sözleşmesi",
    component: <MembershipAgreement />,
  },
];

const ContractContainer: React.FC<ContractContainerProps> = ({
  currentPage,
}) => {
  const CurrentPageComponent = sections.find(
    (section) => section.id === currentPage
  );

  const pathname = usePathname();

  return (
    <>
      <Flex
        w={{
          base: "auto",
          lg: "1400",
        }}
        p={5}
        alignItems={"start"}
        justify={"center"}
        direction={{
          base: "column",
          md: "row",
        }}
        gap={10}
      >
        <Box
          w={{
            base: "100%",
            lg: "290px",
          }}
        >
          <Text
            fontFamily={"Montserrat"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={{
              base: "32px",
              md: "39px",
            }}
            color={"#686868"}
            fontSize={{
              base: "24px",
              md: "32px",
            }}
            textAlign={{
              base: "center",
              lg: "center",
            }}
            my={5}
          >
            Yasal Bilgiler
          </Text>
          <Flex
            as={"ul"}
            direction={"column"}
            gap={{
              base: "10px",
              md: "20px",
            }}
          >
            {sections.map(({ id, name }) => (
              <Flex
                as={"li"}
                key={id}
                borderBottom={`1px solid ${
                  pathname === "/" + id ? "orange" : "parent"
                }`}
                padding={{
                  base: "15px 0px",
                  md: "22px 0px",
                }}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Link href={`/${id}`}>
                  <Text color={pathname === "/" + id ? "orange" : "parent"}>
                    {name}
                  </Text>
                </Link>

                <Icon
                  as={FaChevronRight}
                  color={pathname === "/" + id ? "orange" : "parent"}
                />
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box>
          {CurrentPageComponent && (
            <section key={CurrentPageComponent.id} id={CurrentPageComponent.id}>
              {CurrentPageComponent.component}
            </section>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ContractContainer;
