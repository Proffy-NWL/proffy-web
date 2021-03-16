import React from 'react';

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  MessageContainer,
  Message,
  MessageLogo,
  MessageText
} from './styles';

interface ITopo {
  title: string;
  subtitle: string;
  messagelogo: string;
  message: string;
}

const Topo: React.FC<ITopo> = ({
  title,
  subtitle,
  messagelogo,
  message
}: ITopo) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TitleContainer>
      <MessageContainer>
        <Message>
          <MessageLogo src={messagelogo} />
          <MessageText>{message}</MessageText>
        </Message>
      </MessageContainer>
    </Container>
  )
}

export default Topo;