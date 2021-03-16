import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content:space-between;
`;

export const TitleContainer = styled.div`
  width: 70%;
`;

export const Title = styled.div`
  font-family: 'Archivo', sans-serif;
  font-size: 4.6rem;
  color: ${p => p.theme.colors.shape01};
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.textInPupleBase};
  margin: ${p => p.theme.spacing.vertical};
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items:flex-end;
  justify-content: flex-end;
  width: 30%;
`;

export const Message = styled.div`
  display: flex;
`;

export const MessageLogo = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

export const MessageText = styled.div`
  font-size: 1.2rem;
  color: ${p => p.theme.colors.textInPupleBase};
  text-align: end;
  margin-left: 1.5rem;
`;