import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  height: 100vh;
  background: ${p => p.theme.colors.purpleLight};
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${p => p.theme.spacing.huge};
`;

export const MessageIcon = styled.div`
  background: url('check.png') no-repeat center;
  width: 12.0rem;
  height: 12.0rem;
`;

export const MessagePrimary = styled.div`
  text-align:center;
  margin: ${p => p.theme.spacing.huge};
  font-size: 4.6rem;
  font-weight: bold;
  color: ${p => p.theme.colors.shape01};
`;

export const MessageSecondary = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
  color:  ${p => p.theme.colors.textInPupleBase};
  width: 52%;
`;