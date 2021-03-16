import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { useField } from '@unform/core';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Content,
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
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

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
    type === "checkbox" ?
      (
        <input
          type={type}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          className="input-checkbox"
          {...rest}
        />
      ) :
      (
        <Container
          type={type}
          style={containerStyle}
          isErrored={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
        >
          <Content>
            {(isFocused || inputRef.current ?.value) && <Label> {label}</Label>}
            <ContainerInput>
              {Icon && <Icon size={20} />}
              {!viewPassword ?
                (
                  <input
                    type={type}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    defaultValue={defaultValue}
                    ref={inputRef}
                    {...rest}
                  />
                ) : (
                  <input
                    type="text"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    defaultValue={defaultValue}
                    ref={inputRef}
                    {...rest}
                  />
                )
              }

              {type === "password" && (!viewPassword ?
                <FiEye style={{ cursor: "pointer" }} size={20} color={theme.colors.primary} onClick={() => setViewPassword(!viewPassword)} /> :
                <FiEyeOff style={{ cursor: "pointer" }} size={20} color={theme.colors.primary} onClick={() => setViewPassword(!viewPassword)} />)
              }

              {error && (
                <Error title={error}>
                  <FiAlertCircle color={theme.colors.danger} size={20} />
                </Error>
              )}
            </ContainerInput>
          </Content>

        </Container>
      )

  );
};

export default Input;