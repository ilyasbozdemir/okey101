import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const FooterSignature = ({
  author,
  siteName,
  utmSource,
  utmMedium,
  utmCampaign,
  message,
  color = "white",
  bg = "transparent",
  ...rest
}) => {
  const href = `https://${siteName}/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;

  return (
    <Flex
      justifyContent={"center"}
      fontFamily={"Montserrat"}
      gap={2}
      fontSize={{
        base: "12px",
        md: "12px",
      }}
      color={color}
      bg={bg}
      {...rest}
    >
      <Link href={href} target={"_blank"}>
        <Text as={"span"} fontWeight={"semibold"}>
          {author}
        </Text>
      </Link>
      <Text as={"span"}> {` tarafından ${message}`} </Text>
    </Flex>
  );
};

export default FooterSignature;
