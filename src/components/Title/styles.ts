import styled from 'styled-components';

export const Container = styled.div`
  hr {
    color: ${p => p.theme.colors.backLine}
  }
`;

export const Text = styled.div`
  color: #000;
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.huge};
  margin: ${p => p.theme.spacing.vertical};
`;