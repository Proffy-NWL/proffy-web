import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface IPropsDefault {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<IPropsDefault>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 16.8rem;
  margin: ${p => p.theme.spacing.vertical};
  ${props => props.isErrored && css`
      border-color: ${p => p.theme.colors.danger};
  `}
  ${props => props.isFocused && css`
      color: ${p => p.theme.colors.textCompl};
  `}
  ${props => props.isFilled && css`
      color: ${p => p.theme.colors.primary};
  `}
 `;

export const LabelContainer = styled.div`
  display: flex;
 `;

export const Label = styled.label<IPropsDefault>`
  display: flex;
  align-items:center;
  color: ${p => p.theme.colors.textCompl};
  font-size: ${p => p.theme.fontSizes.small};
  width: 90%;
  ${props => props.isFocused && css`
    color: ${p => p.theme.colors.primary};
  `}
  ${props => props.isErrored && css`
      border-color: ${p => p.theme.colors.danger};
  `}
`;

export const LabelSecondary = styled.div`
  color: ${p => p.theme.colors.textBase};
  font-size: 1.2rem;
  margin: ${p => p.theme.spacing.horizontal};
`;

export const QtdCaracteres = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  font-size: ${p => p.theme.fontSizes.small};
`;


export const TextArea = styled.textarea<IPropsDefault>`
  width: 100%;
  height: 16.8rem;
  background: ${p => p.theme.colors.shape02};
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.backLine};
  margin: ${p => p.theme.spacing.vertical};
  padding: ${p => p.theme.spacing.default};
  font-size: ${p => p.theme.fontSizes.tiny};
  &::placeholder {
    color:  ${p => p.isFocused ? "transparent" : p.theme.colors.textCompl};;
  }
  ${props => props.isFocused && css`
    color: ${p => p.theme.colors.textCompl};
    border: 1px solid ${p => p.theme.colors.primary};
  `}
  ${props => props.isErrored && css`
      border-color: ${p => p.theme.colors.danger};
  `}
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