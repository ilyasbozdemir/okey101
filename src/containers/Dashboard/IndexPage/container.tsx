import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
interface Section {
  id: string;
  component: JSX.Element;
}

const sections: Section[] = [
  {
    id: "student-statistics",
    component: <></>,
  },
];

const DashboardContainer: React.FC = () => {
  return (
    <>
      {sections.map(({ id, component }) => (
        <Wrap as={"section"} key={id} id={id}>
          <WrapItem>{component}</WrapItem>
        </Wrap>
      ))}
    </>
  );
};

export default DashboardContainer;
