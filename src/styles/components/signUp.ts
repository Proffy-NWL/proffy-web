import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: ${p => p.theme.colors.purpleLight};
`;

export const Header = styled.div`
  width: 70%;
`;

export const HeaderContainer = styled.div`
  width: min-content;
  img {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  background-color: ${p => p.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 70.0rem;
  @media (max-width:1080px) {
    max-width: 100%;
    height: inherit;
  }
`;


export const FormContainer = styled(Form)`
  width: 70%;
`;

export const Title = styled.div`
  font-size: 4.6rem;
  font-weight: 600;
  color: ${p => p.theme.colors.textTitle};
`;

export const Subtitle = styled.div`
  margin: ${p => p.theme.spacing.vertical};
`;