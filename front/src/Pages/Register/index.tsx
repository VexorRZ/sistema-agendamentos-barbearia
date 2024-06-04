import React from "react";
import BackgroundImage from "../../assets/images/BackgroundRegisterScreen.png";
import DefaultInput from "../../components/DefaultInput";
import DefaultButton from "../../components/DefaultButton";
import { Formik, Form } from "formik";
import AndroidIcon from "@mui/icons-material/Android";
//import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Container,
  SubArea,
  ErrorMessage,
  Title,
  ContentWrapper,
  BottomText,
  IconWrapper,
} from "./styles";

const loginSchema = Yup.object().shape({
  name: Yup.string().required("Nome é um campo obrigatório"),
  surname: Yup.string().required("Sobrenome é um campo obrigatório"),
  email: Yup.string().required("Email é um campo obrigatório").email(),
  password: Yup.string()
    .required("Password é um campo obrigatório")
    .min(6, "Password em formato inválido"),
});

const Register = () => {
  return (
    <Container>
      <SubArea
        width="710px"
        backgroundImage={BackgroundImage}
        display="flex"
        aligItems="initial"
        justifyCOntent="space-between"
        flexDirection="column"
      >
        <ContentWrapper leftSubContainer>
          <IconWrapper>
            <AndroidIcon
              style={{
                width: "48px",
                height: "48px",
                color: "#ffffff",
              }}
            />
            <div>Mobile</div>
          </IconWrapper>

          <BottomText>
            Conclua seu Cadastro para aproveitar todos serviços que foram
            pensados em você!
          </BottomText>
        </ContentWrapper>
      </SubArea>
      <SubArea
        width="730px"
        display="flex"
        aligItems="center"
        justifyCOntent="center"
      >
        <Formik
          validationSchema={loginSchema}
          initialValues={{ name: "", surname: "", email: "", password: "" }}
          onSubmit={async ({ name, surname, email, password }) => {
            try {
            } catch (err) {}
          }}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <ContentWrapper>
                <Title>Cadastre-se</Title>

                <DefaultInput
                  customPadding="10px"
                  customMarginTop="0px"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  placeHolder="Nome completo"
                  id="name"
                />

                <ErrorMessage>
                  {errors.name != null && touched.name != null && errors.name}
                </ErrorMessage>

                <DefaultInput
                  customPadding="10px"
                  customMarginTop="0px"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeHolder="Email"
                  id="email"
                />

                <ErrorMessage>
                  {errors.email != null &&
                    touched.email != null &&
                    errors.email}
                </ErrorMessage>
                <DefaultInput
                  customPadding="10px"
                  customMarginTop="0px"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  placeHolder="Senha"
                  id="password"
                />

                <ErrorMessage>
                  {errors.password != null &&
                    touched.password != null &&
                    errors.password}
                </ErrorMessage>

                <DefaultButton
                  customBackgroundColor="#04D361"
                  type="submit"
                  marginTop="16px"
                  opacity={0.8}
                  onClick={handleSubmit}
                >
                  Finalizar Cadastro
                </DefaultButton>
              </ContentWrapper>
            </Form>
          )}
        </Formik>
      </SubArea>
    </Container>
  );
};

export default Register;
