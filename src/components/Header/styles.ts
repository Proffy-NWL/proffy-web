import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 6.4rem;
  background: ${p => p.theme.colors.purpleDarken};
  display: flex;
  justify-content:space-around;
  align-items:center;
`;

export const Image = styled.img`
  width: 5.2rem;
  height: 1.5rem;
`;

export const Title = styled.div`
  color: ${p => p.theme.colors.textInPupleBase};
`

export const Background = styled.div`
  background: ${p => p.theme.colors.purpleMedium};
  height: 30.6rem;
  width: 100vw;
`;