
import React, { useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as Yup from 'yup';

import { FiHeart } from "react-icons/fi";
import { FormHandles } from '@unform/core';


import { useToast } from '../../hooks/toast';
import { useTheme } from '../../hooks/theme';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

import {
  Container,
  Content,
  Title,
  FormContainer,
  ContainerForgoutAndRemenber,
  RememberContainer,
  RememberText,
  ForgoutText,
  Footer,
  SignUp,
  SignUpText,
  SignUpButton,
  Message
} from '../../styles/components/login';


// Interfaces
interface SignInFormData {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  const { addToast } = useToast();
  const route = useRouter();
  const { theme } = useTheme();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current ?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      route.push("/dashboard");

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current ?.setErrors(errors);
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }

  }, [addToast])


  return (
    <Container>
      <Background />
      <Content>
        <FormContainer translate="onSubmit" ref={formRef} onSubmit={handleSubmit} action="">
          <Title>Fazer login</Title>
          <Input label="E-mail" type="text" name="email" placeholder="E-mail" />
          <Input label="Senha" type="password" name="password" placeholder="Senha" />
          <ContainerForgoutAndRemenber>
            <RememberContainer>
              <Input type="checkbox" name="remember" />
              <RememberText>Lembrar-me</RememberText>
            </RememberContainer>
            <Link href="/forgoutPassword">
              <ForgoutText>Esqueci a minha senha</ForgoutText>
            </Link>
          </ContainerForgoutAndRemenber>
          <Button type="submit">Entrar</Button>
          <Footer>
            <SignUp>
              <SignUpText>Não possui conta?</SignUpText>
              <Link href="/signUp">
                <SignUpButton>Cadastre-se</SignUpButton>
              </Link>
            </SignUp>
            <Message>
              É de graça <FiHeart color={theme.colors.primary} />
            </Message>
          </Footer>
        </FormContainer>
      </Content>
    </Container>
  )
}

export default Auth;