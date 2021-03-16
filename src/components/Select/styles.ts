import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface IPropsDefault {
  isErrored?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:focus-within::after{
  width: calc(100% - 3.2rem);
  height: 2px;
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 0;
}
`;

export const Label = styled.label`
  display: flex;
  align-items:center;
  color: ${p => p.theme.colors.textCompl};
  font-size: ${p => p.theme.fontSizes.small};
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items:center;
`;

export const SelectInput = styled.select<IPropsDefault>`
    flex: 1;
    background: transparent;
    border: 0;
    border-radius: 0.8rem;
    border: 1px solid ${p => p.theme.colors.backLine};
    height: 6.0rem;
    width: 100%;
    font-size: ${p => p.theme.fontSizes.small};
    color:  ${p => p.theme.colors.textBase};
    background: ${p => p.theme.colors.shape02};
    padding: ${p => p.theme.spacing.default};
    margin: ${p => p.theme.spacing.vertical};
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