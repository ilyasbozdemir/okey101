"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import FormSubmitButton from "./FormSubmitButton";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta adresi gereklidir"),
  password: Yup.string().required("Şifre gereklidir"),
});

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Form submitted with values:", values);
      setIsLoading(false);
      actions.setSubmitting(false);
    }, 1000);
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box maxWidth="400px" margin="0 auto">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginFormSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                  display={"flex"}
                  flexDirection={"column"}
                  width={"100%"}
                  pos={"relative"}
                >
                  <FormLabel
                    htmlFor="email"
                    fontFamily={"Montserrat"}
                    fontWeight={"400"}
                    fontStyle={"normal"}
                    lineHeight={"15px"}
                    color={"#686868"}
                    mt={"10px"}
                    
                  >
                    E-posta Adresi
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="E-posta adresinizi girin"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel
                    htmlFor="password"
                    fontFamily={"Montserrat"}
                    fontWeight={"400"}
                    fontStyle={"normal"}
                    lineHeight={"15px"}
                    color={"#686868"}
                    mt={"10px"}
                  >
                    Şifre
                  </FormLabel>

                  <InputGroup size="md">
                    <Input
                      {...field}
                      id="password"
                      placeholder="Şifrenizi girin"
                      type={show ? "text" : "password"}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" variant={'ghost'} onClick={handleClick}>
                        {show ? <RiEyeOffLine /> : <RiEyeLine />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <FormSubmitButton
              isLoading={formikProps.isSubmitting}
              formikProps={formikProps}
              buttonText="Giriş Yap"
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
