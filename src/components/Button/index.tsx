import React, { ButtonHTMLAttributes } from 'react';
import ClockLoader from 'react-spinners/ClipLoader';

import css from '@emotion/css';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const override = css`
  border-color: #fff;
`;

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <ClockLoader css={override} size={25} loading={loading} />
    ) : (
        children
      )}
  </Container>
);

export default Button;