import { Button } from "@chakra-ui/react";
import React from "react";
import FormSubmitButtonProps from "../../../interfaces/FormSubmitButtonProps";

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  isLoading,
  formikProps,
  buttonText,
}) => {
  return (
    <Button
      mt={4}
      isLoading={isLoading || formikProps.isSubmitting}
      type="submit"
      bgGradient="linear-gradient(91.58deg, #FFA500 -9.27%, #FFBD00 107.22%)"
      _hover={{
        bgGradient: "linear-gradient(91.58deg, #FFBD00 -9.27%, #FFA500 107.22%)",
      }}
      borderRadius={"12px"}
      fontFamily={"Montserrat"}
      fontWeight={"400"}
      fontSize={{
        base:'20px',
        md:"24px"
      }}
      lineHeight={"29px"}
      color={"#fff"}
      marginTop={"30px"}
      width={"100%"}
      padding={"10px"}
      border={"none"}
    >
      {buttonText}
    </Button>
  );
};

export default FormSubmitButton;
