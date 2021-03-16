import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErros';

import Feedback from '../../components/Feedback';
import Tooltip from '../../components/Tooltip';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

import { useToast } from '../../hooks/toast';


import {
  Container,
  Content,
  Header,
  HeaderContainer,
  FormContainer,
  Title,
  Subtitle
} from '../../styles/components/signUp';


interface ISignUpData {
  name: string;
  email: string;
  last_name: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [isFeedback, setIsFeedback] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: ISignUpData) => {
    try {
      formRef.current ?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório')
          .min(4, 'No mínimo 4 caracteres'),
        last_name: Yup.string()
          .required('Sobrenome obrigatório')
          .min(5, 'No mínimo 5 caracteres'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha obrigatório')
          .min(5, 'No mínimo 5 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setIsFeedback(true);
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
    !isFeedback ?
      <Container>
        <Content>
          <Header>
            <HeaderContainer>
              <Tooltip title="Voltar para página de Login.">
                <Link href="/">
                  <img src={"back-page.png"} alt="" />
                </Link>
              </Tooltip>
            </HeaderContainer>
          </Header>
          <FormContainer translate="onSubmit" ref={formRef} onSubmit={handleSubmit} action="">
            <Title>Cadastro</Title>
            <Subtitle>Preencha os dados abaixo para começar.</Subtitle>
            <Input label="Nome" type="text" name="name" placeholder="Nome" />
            <Input label="Sobrenome" type="text" name="last_name" placeholder="Sobrenome" />
            <Input label="E-mail" type="text" name="email" placeholder="E-mail" />
            <Input label="Senha" type="password" name="password" placeholder="Senha" />
            <Button type="submit">Enviar</Button>
          </FormContainer>
        </Content>
        <Background />
      </Container>
      : <Feedback
        title="Cadastro Concluído"
        subtitle="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência."
        txtBtn="Fazer login"
        to="/"
      />
  )
}

export default SignUp;