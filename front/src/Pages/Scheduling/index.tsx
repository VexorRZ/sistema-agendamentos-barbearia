import React from "react";

import AndroidIcon from "@mui/icons-material/Android";
import { Formik, Form } from "formik";
import DefaultInput from "../../components/DefaultInput";
import DefaultButton from "../../components/DefaultButton";
import * as Yup from "yup";

import {
  Container,
  Content,
  ErrorMessage,
  InputArea,
  InputsColumnWrapper,
  InputTitle,
  InputWrapper,
  Values,
  TotalValues,
  ButtonsWrapper,
} from "./styles";

const Scheduling = () => {
  const loginSchema = Yup.object().shape({
    name: Yup.string().required("Nome é um campo obrigatório"),
    surname: Yup.string().required("Sobrenome é um campo obrigatório"),
    email: Yup.string().required("Email é um campo obrigatório").email(),
    password: Yup.string()
      .required("Password é um campo obrigatório")
      .min(6, "Password em formato inválido"),
  });

  return (
    <Container>
      <Content>
        <AndroidIcon />
        <h4>Agendamentos</h4>
        <h4> Bem Vindo ao Agendamento </h4>
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
              <InputArea>
                <InputsColumnWrapper>
                  <InputWrapper>
                    <InputTitle>Funcioniário</InputTitle>
                    <DefaultInput
                      scheduleScreen
                      width="595px"
                      customMarginTop="0px"
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                    />
                    <ErrorMessage>
                      {errors.name != null &&
                        touched.name != null &&
                        errors.name}
                    </ErrorMessage>
                  </InputWrapper>

                  <InputWrapper>
                    <InputTitle>hora</InputTitle>
                    <DefaultInput
                      width="178px"
                      height="32px"
                      scheduleScreen
                      customMarginTop="0px"
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                    />
                    <ErrorMessage>
                      {errors.name != null &&
                        touched.name != null &&
                        errors.name}
                    </ErrorMessage>
                  </InputWrapper>
                  <InputWrapper>
                    <InputTitle>Primeiro nome</InputTitle>
                    <DefaultInput
                      width="595px"
                      scheduleScreen
                      customMarginTop="0px"
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                    />
                    <ErrorMessage>
                      {errors.name != null &&
                        touched.name != null &&
                        errors.name}
                    </ErrorMessage>
                  </InputWrapper>

                  <InputWrapper>
                    <InputTitle>E-mail</InputTitle>
                    <DefaultInput
                      width="595px"
                      scheduleScreen
                      customMarginTop="0px"
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                    />
                    <ErrorMessage>
                      {errors.name != null &&
                        touched.name != null &&
                        errors.name}
                    </ErrorMessage>
                  </InputWrapper>
                </InputsColumnWrapper>

                <InputsColumnWrapper>
                  <InputWrapper>
                    <InputTitle>Data:</InputTitle>
                    <DefaultInput
                      scheduleScreen
                      height="44px"
                      width="305px"
                      customMarginTop="0px"
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                    />
                    <ErrorMessage>
                      {errors.name != null &&
                        touched.name != null &&
                        errors.name}
                    </ErrorMessage>
                  </InputWrapper>

                  <InputWrapper>
                    <InputTitle>Sobrenome:</InputTitle>
                    <DefaultInput
                      scheduleScreen
                      customMarginTop="0px"
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                    />
                    <ErrorMessage>
                      {errors.name != null &&
                        touched.name != null &&
                        errors.name}
                    </ErrorMessage>
                  </InputWrapper>

                  <InputWrapper>
                    <InputTitle>Telefone</InputTitle>
                    <DefaultInput
                      scheduleScreen
                      customMarginTop="0px"
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                    />
                    <ErrorMessage>
                      {errors.name != null &&
                        touched.name != null &&
                        errors.name}
                    </ErrorMessage>
                  </InputWrapper>
                </InputsColumnWrapper>
              </InputArea>
              <Values>
                <h3>Valor unitário:</h3>
                <h3>$35,00</h3>
              </Values>
              <Values>
                <h3>Desconto:</h3>
                <h3>$0,00</h3>
              </Values>

              <TotalValues>
                <strong>Valor Total:</strong>
                <h3>$35,00</h3>
              </TotalValues>

              <ButtonsWrapper>
                <DefaultButton
                  customColor="#000000"
                  customBackgroundColor="#FFFFFF;"
                  width="183px"
                  height="50px"
                  type="submit"
                  marginTop="16px"
                  onClick={handleSubmit}
                >
                  Cancelar
                </DefaultButton>

                <DefaultButton
                  customColor="#FBEBEB"
                  width="183px"
                  height="50px"
                  customBackgroundColor=" #3461D6"
                  type="submit"
                  marginTop="16px"
                  onClick={handleSubmit}
                >
                  Confirmar
                </DefaultButton>
              </ButtonsWrapper>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Scheduling;
