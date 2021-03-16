import React from 'react';

import {
  Container,
  Text
} from './styles';

interface ITitle {
  text: string;
}

const Title: React.FC<ITitle> = ({
  text
}: ITitle) => {
  return (
    <Container>
      <Text>{text}</Text>
      <hr />
    </Container>
  )
}

export default Title;