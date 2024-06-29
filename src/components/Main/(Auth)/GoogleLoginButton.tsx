import { Button } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function GoogleLoginButton() {
  return (
    <>
      <Button
        width={"50%"}
        height={"50px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #686868"}
        borderRadius={"12px"}
        bg={"#fff"}
        gap={{
          base: "5px",
          md: "10px",
        }}
        fontFamily={"Poppins"}
        fontStyle={"normal"}
        fontWeight={"600"}
        fontSize={{
          base: "9px",
          md: "11px",
        }}
        lineHeight={{
          base: "11px",
          md: "16px",
        }}
        color={"#686868"}
        leftIcon={<FcGoogle width={20} height={20} />}
      >
        Google ile devam et
      </Button>
    </>
  );
}

export default GoogleLoginButton;
