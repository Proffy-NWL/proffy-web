import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Error,
  Label,
  ContainerInput
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  noError?: boolean;
}

const InputLabel: React.FC<InputProps> = ({
  name,
  type,
  label,
  containerStyle = {},
  icon: Icon,
  noError,
  ...rest
}) => {

  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current ?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      <Label> {label}</Label>
      <ContainerInput>
        {Icon && <Icon size={20} />}
        <input
          type={type}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {!noError && error && (
          <Error title={error}>
            <FiAlertCircle color={theme.colors.danger} size={20} />
          </Error>
        )}
      </ContainerInput>
    </Container>
  );
};

export default InputLabel;