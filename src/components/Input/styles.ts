import styled, { css } from 'styled-components';


import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  type: string;
}

export const Container = styled.div<ContainerProps>`
  color: ${p => p.theme.colors.textInput};
  background: ${p => p.theme.colors.shape02};
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.backLine};
  padding: 16px;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
  ${props =>
    props.isErrored &&
    css`
      border-color: ${p => p.theme.colors.danger};
    `}
  ${props =>
    props.isFocused &&
    css`
      color: ${p => p.theme.colors.textCompl};
      border-left: 5px solid ${p => p.theme.colors.primary};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: ${p => p.theme.colors.primary};
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    height: 40px;
    font-size:${p => p.theme.fontSizes.default};
    color:  ${p => p.theme.colors.textBase};
    &::placeholder {
      color:  ${p => p.isFocused ? "transparent" : p.theme.colors.textCompl};;
    }
    &[type="checkbox"]{
      width: 20px;
      height: 20px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Content = styled.div`
  width: 100%;
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

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
`;

export const Label = styled.label``;