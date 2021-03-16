import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background: ${p => p.theme.colors.purpleMedium};
  height: 25.6rem;
  width: 100vw;
`;

export const Content = styled.div`
  width: 50%;
  margin-top: -270px;
`

export const FormContainer = styled(Form)`
  background: ${p => p.theme.colors.shape01};
  padding: 4.0rem;
  border-radius: 0.8rem;
  margin: ${p => p.theme.spacing.huge} 0;
  hr {
    background: ${p => p.theme.colors.backLine};
    margin: ${p => p.theme.spacing.vertical}
  }
`;

export const Line = styled.div`
  display: flex;
  align-items:center;
  div + div {
    width: 50%;
  }
`;

export const User = styled.div`
  display: flex;
  align-items:center;
  width: 50%;
`;

export const UserAvatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: calc(4.8rem / 2);
`;

export const UserName = styled.div`
  margin: ${p => p.theme.spacing.horizontal};
  color: #000;
  font-family: 'Archivo', sans-serif;
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.default};
`;

export const HourlyValue = styled.div`
  display: flex;
  width: 100% !important;
  width: 100% !important;
  margin-left: 10px;
  div {
    width: 100% !important;
  }
`;

export const WeekDay = styled.div`
  display: flex;
  width: 100% !important;
  margin-left: 10px;
  div {
    margin: 0 5px;
    width: 100% !important;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
`;

export const Info = styled.div`
  display:flex;
  align-items:center;
  width: 50%;
  svg {
    font-size : 40px;
    color: ${p => p.theme.colors.primary};
  }
`;

export const InfoMessage = styled.div`
  margin: ${p => p.theme.spacing.horizontal};
  font-size: ${p => p.theme.fontSizes.small};
`;


export const InfoMessageTextPrimary = styled.div`
  color: ${p => p.theme.colors.primary};
`;

export const InfoMessageText = styled.div``;

export const Submit = styled.button`
  background: ${p => p.theme.colors.greenDarken};
  border: none;
  color: ${p => p.theme.colors.shape01};
  border-radius: 0.8rem;
  padding: ${p => p.theme.spacing.default};
  width: 40%;
  height: 5.0rem;
  :hover, :focus {
    background: ${p => p.theme.colors.greenLight};
  }
`;