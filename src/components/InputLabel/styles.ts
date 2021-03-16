import styled, { css } from 'styled-components';


import Tooltip from '../Tooltip';

interface IPropsDefault {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<IPropsDefault>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${p => p.theme.spacing.vertical};
  label{
    ${props => props.isFocused && css`
      color: ${p => p.theme.colors.primary};
    `}
    ${props => props.isErrored && css`
        border-color: ${p => p.theme.colors.danger};
    `}
  }
  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    border-radius: 0.8rem;
    border: 1px solid ${p => p.theme.colors.backLine};
    height: 6.0rem;
    font-size: ${p => p.theme.fontSizes.small};
    color:  ${p => p.theme.colors.textBase};
    background: ${p => p.theme.colors.shape02};
    padding: ${p => p.theme.spacing.default};
    margin: ${p => p.theme.spacing.vertical};
    &::placeholder {
      color:  ${p => p.isFocused ? "transparent" : p.theme.colors.textCompl};;
    }
    ${props =>
    props.isErrored &&
    css`
      border-color: ${p => p.theme.colors.danger};
    `}
    ${props =>
    props.isFocused &&
    css`
        color: ${p => p.theme.colors.textCompl};
        border: 1px solid ${p => p.theme.colors.primary};
      `}
    ${props =>
    props.isFilled &&
    css`
        color: #000;
      `}
  }
`;

export const Label = styled.label<IPropsDefault>`
  color: ${p => p.theme.colors.textCompl};
  font-size: ${p => p.theme.fontSizes.small};
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
`;


export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: ${p => p.theme.colors.danger};
    color:  ${p => p.theme.colors.shape02};;
    &::before {
      border-color:  ${p => p.theme.colors.danger} transparent;
    }
  }
`;