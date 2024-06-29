"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormSubmitButton from "./FormSubmitButton";

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta adresi gereklidir"),
  password: Yup.string().required("Şifre gereklidir"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı gereklidir"),
});

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: RegisterFormValues,
    actions: FormikHelpers<RegisterFormValues>
  ) => {
    setIsLoading(true);
    // Burada formun gönderilme işlemleri yapılır, API çağrıları vs.
    setTimeout(() => {
      console.log("Form submitted with values:", values);
      setIsLoading(false);
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Box maxWidth="400px" margin="0 auto">
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={RegisterFormSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
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
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Şifrenizi girin"
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="confirmPassword">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.confirmPassword && form.touched.confirmPassword
                  }
                >
                  <FormLabel
                    htmlFor="confirmPassword"
                    fontFamily={"Montserrat"}
                    fontWeight={"400"}
                    fontStyle={"normal"}
                    lineHeight={"15px"}
                    color={"#686868"}
                    mt={"10px"}
                  >
                    Şifreyi Tekrarla
                  </FormLabel>
                  <Input
                    {...field}
                    id="confirmPassword"
                    type="password"
                    placeholder="Şifrenizi tekrar girin"
                  />
                  <FormErrorMessage>
                    {form.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FormSubmitButton
              isLoading={formikProps.isSubmitting}
              formikProps={formikProps}
              buttonText="Kaydol"
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
