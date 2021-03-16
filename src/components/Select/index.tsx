import React, { SelectHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Label,
  SelectContainer,
  SelectInput,
  Error
} from './styles';


interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  const { theme } = useTheme();
  const inputRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container  >
      <Label >{label}</Label>
      <SelectContainer>
        <SelectInput
          isErrored={!!error}
          name={name}
          defaultValue={""}
          ref={inputRef}
          {...rest}
        >
          <option value="" disabled hidden> Selecione uma opção </option>
          {
            options.map(option => {
              return <option key={option.value} value={option.value}> {option.label} </option>
            })
          }
        </SelectInput>
        {error && (
          <Error title={error}>
            <FiAlertCircle color={theme.colors.danger} size={20} />
          </Error>
        )}
      </SelectContainer>
    </Container>
  )
}

export default Select;