import React from "react";
import Slider from "../../../components/Main/(Home)/Slider";
import Showcase from "components/Main/(Home)/Showcase";
import { Flex } from "@chakra-ui/react";

interface Section {
  id: string;
  component: JSX.Element;
}

const sections: Section[] = [
];

const HomeContainer: React.FC = () => {
  return (
    <Flex direction={'column'} gap={2}>
      {sections.map(({ id, component }) => (
        <section key={id} id={id}>
          {component}
        </section>
      ))}
    </Flex>
  );
};

export default HomeContainer;
