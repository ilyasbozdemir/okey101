import React from "react";
import AuthContainerProps from "../../../interfaces/AuthContainerProps";
import Register from "../../../components/Main/(Auth)/Register";
import Login from "../../../components/Main/(Auth)/Login";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import GoogleLoginButton from "../../../components/Main/(Auth)/GoogleLoginButton";
import OrDivider from "../../../components/Main/(Auth)/OrDivider";


const AuthContainer: React.FC<AuthContainerProps> = ({ componentType }) => {
  let bgImage =
    componentType === "login" ? "/images/loginbg.png" : "/images/singupbg.png";
  let header = componentType === "login" ? "Giriş Yap" : "Hesap Oluştur";

  let formComponentArea;

  if (componentType === "login") {
    formComponentArea = <Login />;
  } else if (componentType === "register") {
    formComponentArea = <Register />;
  }

  let footer;

  if (componentType === "login") {
    footer = {
      text: "Bir hesabınız yok mu?",
      link: {
        href: "/kayit-ol",
        label: "Hesap Oluştur",
      },
    };
  } else if (componentType === "register") {
    footer = {
      text: "Zaten Hesabınız var mı?",
      link: {
        href: "/giris-yap",
        label: "Giriş Yapın",
      },
    };
  }

  return (
    <Flex
      as={"section"}
      bgImage={`url(${bgImage})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundAttachment={"fixed"}
      backgroundPosition={"center center"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
        width={{
          base: "100vw",
          sm: "80vw",
          md: "70vw",
          xl: "45vw",
        }}
        height={"70vh"}
        bg={"white"}
        boxShadow={"0px 8px 6px rgba(0, 0, 0, 0.25)"}
        borderRadius={"24px"}
      >
        <Text
          fontFamily={"Montserrat"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={{
            base:'32px',
            md:"39px"
          }}
          color={"#686868"}
          fontSize={{
            base:'24px',
            md:"32px"
          }}
        >
          {header}
        </Text>

        <GoogleLoginButton />
        <OrDivider />

        {formComponentArea}

        <Text
          fontFamily={"Montserrat"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          color={"#686868"}
          fontSize={{
            base:'12px',
            md:"16px"
          }}
        >
          {footer.text + " "}
          <Link href={footer.link.href}>
            <Text as={"span"} fontWeight={"600"}>
              {footer.link.label}
            </Text>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default AuthContainer;
