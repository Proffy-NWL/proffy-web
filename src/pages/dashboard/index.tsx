import React from 'react';

import Link from 'next/link';
import { FiBookOpen, FiMonitor, FiPower, FiHeart } from 'react-icons/fi';

import { useTheme } from '../../hooks/theme';

import {
  Container,
  Header,
  HeaderContainer,
  User,
  UserAvatar,
  UserName,
  ProffyContainer,
  ProffyImgLogo,
  ProffyImgIlustracao,
  Content,
  ContentContainer,
  Welcome,
  Bold,
  Connections,
  Actions,
  Estudy,
  Job
} from '../../styles/components/dashboard';

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <User>
            <UserAvatar src={"avatar.jpg"} />
            <UserName>Douglas Santos</UserName>
          </User>
          <FiPower color={theme.colors.textInPupleBase} style={{ cursor: 'pointer' }} />
        </HeaderContainer>
        <ProffyContainer>
          <ProffyImgLogo src={"logo.png"} />
          <ProffyImgIlustracao src={"bg-home.png"} />
        </ProffyContainer>
      </Header>
      <Content>
        <ContentContainer>
          <Welcome>
            Seja bem-vindo <br />
            <Bold>O que deseja fazer?</Bold>
          </Welcome>
          <Actions>
            <Link href="perfil-trabalho">
              <Estudy>
                <FiBookOpen size={20} /> Estudar
            </Estudy>
            </Link>
            <Link href="perfil-trabalho">
              <Job>
                <FiMonitor size={20} /> Dar Aulas
            </Job>
            </Link>
          </Actions>
          <Connections>
            Total de 287 coneções <br />
            já realizadas <FiHeart size={20} />
          </Connections>
        </ContentContainer>
      </Content>

    </Container>
  )
}

export default Home;