import styled from 'styled-components';

import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: ${p => p.theme.colors.purpleLight};
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

export const Title = styled.div`
  font-size: 3.6rem;
  font-weight: 600;
  color: ${p => p.theme.colors.textTitle};
  margin: ${p => p.theme.spacing.vertical};
`;

export const FormContainer = styled(Form)`
  width: 70%;
`;

export const ContainerForgoutAndRemenber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
`;

export const RememberContainer = styled.label`
  display: flex;
  align-items: center;
  margin: ${p => p.theme.spacing.vertical};
  cursor:pointer;

  input {
    cursor:pointer;
  }
`;

export const RememberText = styled.div`
  margin: 0 10px;
  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.textCompl};
`;

export const ForgoutText = styled.div`
  margin: ${p => p.theme.spacing.vertical};
  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.textCompl};
  cursor: pointer;
  :hover, :focus{
    text-decoration-line: underline;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: ${p => p.theme.spacing.huge};
`;

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpText = styled.div`
  color: ${p => p.theme.colors.textBase};
  font-size: ${p => p.theme.fontSizes.small};
`;

export const SignUpButton = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.purpleDarken};
  text-decoration-line: underline;
  font-weight: 600;
  cursor: pointer;
`;

export const Message = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
`;