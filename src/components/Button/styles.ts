import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${p => p.theme.colors.greenDarken};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${p => p.theme.colors.shape01};
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover, :focus {
    background: ${p => shade(0.2, p.theme.colors.greenDarken)};
  }
`;