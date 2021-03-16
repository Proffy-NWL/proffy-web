import React from 'react';

import { FiArrowLeft } from 'react-icons/fi'

import { useRouter } from 'next/router';
import { useTheme } from '../../hooks/theme';


import {
  Container,
  Image,
  Title,
  Background
} from './styles';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({
  title
}: IHeader) => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>
      <Container>
        <FiArrowLeft size={20} color={theme.colors.textInPupleBase} onClick={() => router.back()} style={{ cursor: "pointer" }} />
        <Title>{title}</Title>
        <Image src={"proffy-header-logo.png"} onClick={() => router.push("/home")} />
      </Container>
      <Background />
    </>
  )
}

export default Header;