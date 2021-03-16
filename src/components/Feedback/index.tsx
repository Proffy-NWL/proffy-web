import React from 'react';
import Link from 'next/link';

import Button from '../Button';

import {
  Container,
  Content,
  Message,
  MessageIcon,
  MessagePrimary,
  MessageSecondary
} from './styles';

interface IFeedback {
  title: string;
  subtitle: string;
  txtBtn: string;
  to: string;
}

const Feedback: React.FC<IFeedback> = ({
  title,
  subtitle,
  txtBtn,
  to
}: IFeedback) => {
  return (
    <Container>
      <Content>
        <Message>
          <MessageIcon />
          <MessagePrimary>{title}</MessagePrimary>
          <MessageSecondary>{subtitle}</MessageSecondary>
        </Message>
        <Link href={to}>
          <Button style={{ width: "200px" }}>{txtBtn}</Button>
        </Link>
      </Content>
    </Container>
  );
}

export default Feedback;