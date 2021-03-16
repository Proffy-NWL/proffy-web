import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import Link from 'next/link';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErros';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Tooltip from '../../components/Tooltip';
import Feedback from '../../components/Feedback';

import { useToast } from '../../hooks/toast';

import {
  Container,
  Content,
  Header,
  HeaderContainer,
  FormContainer,
  Title,
  Subtitle
} from '../../styles/components/forgoutPassword';

interface IForgoutPasswordData {
  email: string;
}

const ForgoutPassword: React.FC = () => {
  const [isFeedback, setIsFeedback] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: IForgoutPasswordData) => {
    try {
      formRef.current ?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido')
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
            <Title>Eita, esqueceu <br /> sua senha?</Title>
            <Subtitle>Não esquenta, vamos dar um jeito nisso.</Subtitle>
            <Input label="E-mail" type="text" name="email" placeholder="E-mail" />
            <Button type="submit">Enviar</Button>
          </FormContainer>
        </Content>
        <Background />
      </Container>
      : <Feedback
        title="Redefinição enviada!"
        subtitle="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
        txtBtn="Voltar ao Login"
        to=""
      />
  )
}

export default ForgoutPassword;