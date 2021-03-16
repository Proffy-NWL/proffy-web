import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiInfo } from 'react-icons/fi';

import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErros';

import Header from '../../components/Header';
import Topo from '../../components/Topo';
import InputLabel from '../../components/InputLabel';
import TextAreaLabel from '../../components/TextAreaLabel';
import Title from '../../components/Title';
import Select from '../../components/Select';

import {
  Container,
  Content,
  FormContainer,
  Line,
  User,
  UserAvatar,
  UserName,
  WeekDay,
  HourlyValue,
  Footer,
  Info,
  InfoMessage,
  InfoMessageText,
  InfoMessageTextPrimary,
  Submit
} from '../../styles/components/jobProfile';


interface IJobProfileData {
  phone: string;
  biography: string;
  teaching: string;
  day_week: string;
  hr_ini: number;
  hr_end: number;
}

const JobProfile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: IJobProfileData) => {
    console.log("data", data)
    try {
      formRef.current ?.setErrors({});

      const schema = Yup.object().shape({
        phone: Yup.string().required('Whatsaap obrigatório'),
        biography: Yup.string().required('Biográfia obrigatório'),
        teaching: Yup.string().required('Matéria obrigatório'),
        day_week: Yup.string().required('Horário obrigatório'),
        hr_ini: Yup.string().required('Horário de início obrigatório'),
        hr_end: Yup.string().required('Horário de término obrigatório'),
      });


      await schema.validate(data, {
        abortEarly: false,
      });

      // history.push("/home")

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
      <Header title="Dar Aulas" />
      <Content>
        <Topo
          title="Que incrível que você quer dar aulas."
          subtitle="O primeiro passo, é preencher esse formulário de inscrição."
          messagelogo={"foguete.png"}
          message="Preparare-se! vai ser o máximo."
        />
        <FormContainer translate="onSubmit" ref={formRef} onSubmit={handleSubmit} action="">
          <Title text="Seus dados" />
          <Line>
            <User>
              <UserAvatar src={"avatar.jpg"} />
              <UserName>Douglas Santos</UserName>
            </User>
            <InputLabel label="Whatsaap" type="text" name="phone" placeholder="(99) 9 9876-9898" />
          </Line>
          <Line>
            <TextAreaLabel name="biography" label="Biografia" maxLength={300} labelSecondary="(Máximo 300 caracteres)" />
          </Line>

          <Title text="Sobre a aula" />
          <Line>
            <Select
              name="teaching"
              label="Matéria"
              options={[
                { value: '0', label: 'Programação' },
                { value: '1', label: 'UX' },
                { value: '2', label: 'UI' },
                { value: '3', label: 'Banco de Dados' },
              ]}
            />
            <HourlyValue>
              <InputLabel label="Custo/hora da aula" type="text" name="hr_ini" placeholder="R$ 100,00" noError={true} />
            </HourlyValue>
          </Line>

          <Title text="Horários disponíveis" />
          <Line>
            <Select
              name="day_week"
              label="Dias da semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <WeekDay>
              <InputLabel label="Das" type="text" name="hr_ini" placeholder="10:00" noError={true} />
              <InputLabel label="Até" type="text" name="hr_end" placeholder="13:00" noError={true} />
            </WeekDay>
          </Line>

          <hr />

          <Footer>
            <Info>
              <FiInfo />
              <InfoMessage>
                <InfoMessageTextPrimary>Importante!</InfoMessageTextPrimary>
                <InfoMessageText>Preencha todos os dados corretamente.</InfoMessageText>
              </InfoMessage>
            </Info>
            <Submit type="submit">Salvar</Submit>
          </Footer>


        </FormContainer>
      </Content>
    </Container>
  )
}

export default JobProfile;